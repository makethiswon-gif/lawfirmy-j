import json
import re

OUTPUT_FILE = r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\src\data\columns.ts"

# Read the generated columns.ts and fix the string formatting. Actually, better to just re-read the scraped data if I saved it... but I didn't save it as JSON.
# I'll just re-run the scraper logic, but saving time by reading the bad file and trying to extract?
# No, let's just re-run the scraper but only fix the output part. I'll modify the existing scratch_scrape_all.py.

with open(r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\scratch_scrape_all.py", "r", encoding="utf-8") as f:
    code = f.read()

# Replace the generation logic
new_generation_logic = """
# Generate TS file safely using json.dumps
ts_content = "export const columns = [\\n"
for a in articles:
    ts_content += f\"\"\"  {{
    id: {json.dumps(a['id'], ensure_ascii=False)},
    title: {json.dumps(a['title'], ensure_ascii=False)},
    date: {json.dumps(a['date'], ensure_ascii=False)},
    content: {json.dumps(a['content'], ensure_ascii=False)}
  }},\\n\"\"\"
ts_content += "];\\n"

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Written to {OUTPUT_FILE}")
"""

# Replace the old logic
code = re.sub(r'# Generate TS file\n.*', new_generation_logic, code, flags=re.DOTALL)

with open(r"c:\Users\incbc\.gemini\antigravity\scratch\lawfirm-website\scratch_scrape_all.py", "w", encoding="utf-8") as f:
    f.write(code)

