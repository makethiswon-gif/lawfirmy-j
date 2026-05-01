import whois
import time

domains = [
    "yyjlawfirm.com",
    "yyjlaw.com",
    "yyjpartners.com",
    "yangyounglaw.com",
    "yangyoungfirm.com",
    "yj-lawfirm.com",
    "yj-partners.com",
    "lawfirmyyj.com",
    "yangyoungjh.com",
    "yangyoung-law.com",
    "yyj-legal.com",
    "yyjlegal.com",
    "yylawpartners.com"
]

available = []

for d in domains:
    try:
        w = whois.whois(d)
        if not w.domain_name:
            available.append(d)
            print(f"AVAILABLE: {d}")
        else:
            print(f"TAKEN: {d}")
    except Exception as e:
        if "No match for" in str(e) or "NOT FOUND" in str(e):
            available.append(d)
            print(f"AVAILABLE: {d}")
        else:
            print(f"ERROR checking {d}: {e}")
    time.sleep(0.5)

print("\n--- Summary ---")
print("Available domains:")
for a in available:
    print(a)
