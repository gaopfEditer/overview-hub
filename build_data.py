#!/usr/bin/env python3
"""从 manifest.json 重新生成 data.js。用法: python3 build_data.py"""
import json, os, re, datetime
from zoneinfo import ZoneInfo
HERE = os.path.dirname(os.path.abspath(__file__))
TZ = ZoneInfo("Asia/Shanghai")

def js_tpl(s):
    return "`" + s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${") + "`"

def summary_of(md):
    for line in md.splitlines():
        l = line.strip()
        if l and not l.startswith(("#", "|", "---", "```", ">")):
            l = re.sub(r"[*_`\[\]]", "", l)
            return l[:140] + ("…" if len(l) > 140 else "")
    return ""

def main():
    m = json.load(open(os.path.join(HERE, "manifest.json"), encoding="utf-8"))
    out = ["window.HUB_DATA = {", "tracks: " + json.dumps(m["tracks"], ensure_ascii=False) + ",", "docs: ["]
    for d in m["docs"]:
        p = d["path"] if os.path.isabs(d["path"]) else os.path.join(HERE, d["path"])
        if not os.path.exists(p):
            print("跳过(不存在):", p); continue
        content = open(p, encoding="utf-8", errors="replace").read()
        date = d.get("date") or datetime.datetime.fromtimestamp(os.path.getmtime(p), TZ).strftime("%Y-%m-%d %H:%M")
        meta = {"id": d["id"], "track": d["track"], "title": d["title"], "date": date,
                "summary": d.get("summary") or summary_of(content), "tags": d.get("tags", []),
                "source": d.get("source", ""), "path": d["path"],
                "has_evidence": bool(d.get("has_evidence", False))}
        j = json.dumps(meta, ensure_ascii=False)
        out.append(j[:-1] + ', "content": ' + js_tpl(content) + "},")
    out.append("]};")
    open(os.path.join(HERE, "data.js"), "w", encoding="utf-8").write("\n".join(out))
    print("已生成 data.js,", len(out) - 4, "张卡片")

if __name__ == "__main__":
    main()
