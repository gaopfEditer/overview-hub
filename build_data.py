#!/usr/bin/env python3
"""从 manifest.json 重新生成 data.js。用法: python3 build_data.py

Schema（可演进）:
  sections[]          — Tab：platforms / cases / docs
  platform_types[]    — 平台类型筛选
  platforms[]         — 平台卡（固定四字段 + path 正文 + related_docs）
  cases[]             — 案例卡；条目上的任意键都会进入 data.js（自动扩展）
  docs[]              — 文档卡；嵌入 path 指向的 Markdown
"""
import json, os, re, datetime
from zoneinfo import ZoneInfo

HERE = os.path.dirname(os.path.abspath(__file__))
TZ = ZoneInfo("Asia/Shanghai")

# 案例卡：不进入「动态字段」展示区的元数据键
CASE_META = {
    "id", "title", "path", "tags", "related_docs", "is_template",
    "summary", "date", "source", "has_evidence", "content",
}

# 平台卡四字段（中文 UI 标签）
PLATFORM_FIELDS = [
    ("permissions", "权限需求清单"),
    ("access_path", "操作路径"),
    ("caveats", "注意事项"),
    ("trends_keywords", "Google Trends 对应关键词"),
]


def js_tpl(s):
    return "`" + s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"


def summary_of(md):
    for line in md.splitlines():
        l = line.strip()
        if l and not l.startswith(("#", "|", "---", "```", ">")):
            l = re.sub(r"[*_`\[\]]", "", l)
            return l[:140] + ("…" if len(l) > 140 else "")
    return ""


def public_path(p):
    """对外展示用路径：绝对 /workspace/... 收成相对片段，避免 Pages 泄露本机路径。"""
    if not p:
        return ""
    p = str(p)
    if os.path.isabs(p):
        parts = [x for x in p.split("/") if x]
        if "workspace" in parts:
            i = parts.index("workspace")
            return "/".join(parts[i + 1:])
        return os.path.basename(p)
    return p


def read_path(p):
    if not p:
        return ""
    full = p if os.path.isabs(p) else os.path.join(HERE, p)
    if not os.path.exists(full):
        print("跳过(不存在):", full)
        return None
    return open(full, encoding="utf-8", errors="replace").read()


def file_date(p, fallback=None):
    if fallback:
        return fallback
    full = p if os.path.isabs(p) else os.path.join(HERE, p)
    if os.path.exists(full):
        return datetime.datetime.fromtimestamp(os.path.getmtime(full), TZ).strftime("%Y-%m-%d %H:%M")
    return datetime.datetime.now(TZ).strftime("%Y-%m-%d %H:%M")


def emit_obj(meta, content=None):
    """序列化一张卡：meta JSON + 可选 content 模板字符串。"""
    j = json.dumps(meta, ensure_ascii=False)
    if content is None:
        return j + ","
    return j[:-1] + ', "content": ' + js_tpl(content) + "},"


def main():
    m = json.load(open(os.path.join(HERE, "manifest.json"), encoding="utf-8"))
    sections = m.get("sections") or m.get("tracks") or []
    platform_types = m.get("platform_types", [])
    platforms_in = m.get("platforms", [])
    cases_in = m.get("cases", [])
    docs_in = m.get("docs", [])

    # 兼容旧 track 模型：若无 platforms/cases 而只有 docs+tracks，则全部进 docs
    if not platforms_in and not cases_in and m.get("docs") and m.get("tracks"):
        docs_in = m["docs"]

    out = [
        "window.HUB_DATA = {",
        "sections: " + json.dumps(sections, ensure_ascii=False) + ",",
        "platform_types: " + json.dumps(platform_types, ensure_ascii=False) + ",",
        "platform_field_labels: " + json.dumps(
            {k: lab for k, lab in PLATFORM_FIELDS}, ensure_ascii=False
        ) + ",",
        "platforms: [",
    ]

    n_plat = 0
    for p in platforms_in:
        content = ""
        if p.get("path"):
            raw = read_path(p["path"])
            if raw is None:
                continue
            content = raw
        meta = {
            "id": p["id"],
            "type": p.get("type", ""),
            "title": p["title"],
            "url": p.get("url", ""),
            "summary": p.get("summary") or summary_of(content),
            "permissions": p.get("permissions", ""),
            "access_path": p.get("access_path", ""),
            "caveats": p.get("caveats", ""),
            "trends_keywords": p.get("trends_keywords", ""),
            "related_docs": p.get("related_docs", []),
            "tags": p.get("tags", []),
            "path": public_path(p.get("path", "")),
            "date": file_date(p.get("path", ""), p.get("date")),
        }
        out.append(emit_obj(meta, content))
        n_plat += 1
    out.append("],")

    # 案例：收集所有动态字段名（除元数据），供前端表头扩展
    out.append("cases: [")
    n_case = 0
    all_extra_keys = []
    seen_keys = set()
    for c in cases_in:
        content = ""
        if c.get("path"):
            raw = read_path(c["path"])
            if raw is None and not any(k not in CASE_META for k in c):
                continue
            if raw:
                content = raw
        # 动态字段：manifest 上除元数据外的一切
        fields = {}
        for k, v in c.items():
            if k in CASE_META or k == "content":
                continue
            fields[k] = v
            if k not in seen_keys:
                seen_keys.add(k)
                all_extra_keys.append(k)
        meta = {
            "id": c["id"],
            "title": c.get("title", c["id"]),
            "is_template": bool(c.get("is_template", False)),
            "summary": c.get("summary") or "",
            "tags": c.get("tags", []),
            "related_docs": c.get("related_docs", []),
            "path": public_path(c.get("path", "")),
            "source": c.get("source", ""),
            "has_evidence": bool(c.get("has_evidence", False)),
            "date": file_date(c.get("path", ""), c.get("date")),
            "fields": fields,
        }
        # 也把标准四字段提升到顶层方便搜索（若存在）
        for std in ("来源", "单子类型", "操作思路", "结果"):
            if std in fields:
                meta[std] = fields[std]
        out.append(emit_obj(meta, content if content else None))
        n_case += 1
    out.append("],")
    out.append("case_field_order: " + json.dumps(all_extra_keys, ensure_ascii=False) + ",")

    out.append("docs: [")
    n_doc = 0
    for d in docs_in:
        raw = read_path(d["path"])
        if raw is None:
            continue
        meta = {
            "id": d["id"],
            "title": d["title"],
            "theme": d.get("theme", ""),
            "date": file_date(d["path"], d.get("date")),
            "summary": d.get("summary") or summary_of(raw),
            "tags": d.get("tags", []),
            "source": d.get("source", ""),
            "path": public_path(d["path"]),
            "related_docs": d.get("related_docs", []),
        }
        out.append(emit_obj(meta, raw))
        n_doc += 1
    out.append("]")
    out.append("};")

    open(os.path.join(HERE, "data.js"), "w", encoding="utf-8").write("\n".join(out))
    print(f"已生成 data.js — 平台 {n_plat} · 案例 {n_case} · 文档 {n_doc}")


if __name__ == "__main__":
    main()
