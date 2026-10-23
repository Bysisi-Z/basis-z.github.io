# Task for Codex: link company names to their official websites (S² pharma stock table)

## Goal
On the page `public/documents/s2/2026-10-pharma-listed-stocks.html`, the **Company** column (English company name) must become a link to the company's **official website**, opening in a new tab. No new visible column. Rows without a verified website stay plain text.

## How the page is built (do not edit the generated HTML by hand)
- Data: Excel workbook `~/Desktop/Pharma_Listed_Stocks_A_HK_US_CH_20261023.xlsx`, sheets `A股`, `港股`, `美股`, `瑞士` (one row per stock, column `代码` = code), plus `说明与来源`, `更新时间`.
- Page generator: `scripts/make_s2_pharma_stocks_page.py <workbook> public/documents/s2/2026-10-pharma-listed-stocks.html`
- Page template (JS + CSS): `scripts/s2_pharma_stocks_template.html`
- Background: `CONTEXT_S2_CAPITAL.md` → "Interactive pharma stock table".

## Steps
1. **Collect websites** with a new script `scripts/add_s2_company_websites.py <workbook.xlsx>` that writes a column `公司网址` (append it as the **last** column of each market sheet; never reorder or modify other columns or rows).
   - A-share: Eastmoney company profile, e.g. `https://emweb.securities.eastmoney.com/PC_HSF10/CompanySurvey/PageAjax?code=SH603259` → `jbzl[0].ORG_WEB` (prefix SH/SZ/BJ from the code: 6/9→SH except 92xxxx→BJ, 4/8/92→BJ, else SZ).
   - Hong Kong: Eastmoney HK company profile (find the JSON endpoint behind `https://emweb.securities.eastmoney.com/PC_HKF10/pages/home/index.html?code=02359&type=web#/CompanyProfile`).
   - US and Switzerland: pick a source that returns the company's own website (e.g. Yahoo Finance asset profile). SEC's `submissions` JSON usually has an empty `website` field — don't rely on it.
   - Normalise to `https://…` (add the scheme if missing, strip trailing spaces). Keep only the company's own domain — no exchange, data-vendor, Wikipedia or social-media pages. **Never guess or construct a domain**; if no source returns one, leave the cell empty.
   - **Rate limits matter**: Eastmoney's and Tencent's servers block bulk requests (we were blocked on 2026-10-23). Use at most 2 parallel requests with a short pause, retry at most twice, and cache every response in a JSON file in `/tmp` so a rerun does not hit the APIs again. Print progress every 100 rows.
   - At the end print per market: filled / total, and the list of codes left empty.
2. **Generator** `scripts/make_s2_pharma_stocks_page.py`: do **not** emit `公司网址` as a table column. Instead pass it per row (e.g. a parallel `urls` array per market, or an extra hidden field) so the template can link the Company cell. Today the script stops on any untranslated header — handle `公司网址` explicitly.
3. **Template** `scripts/s2_pharma_stocks_template.html`: in `renderBody()`, when a row has a URL, render the Company cell as `<a href="…" target="_blank" rel="noopener">name</a>`; style it like the rest of the cell (inherit colour, subtle underline on hover only). Keep escaping (`esc()`) for both URL and name. Sorting, filters and search must keep working on the plain name.
4. **Rebuild** the page from the workbook and check it in a browser: links open the right sites (spot-check ~10 per market, incl. LLY, Roche `RO`, WuXi AppTec `603259` / `02359.HK`), no console errors, no layout change on desktop and at 390px width.
5. **Document** in `CONTEXT_S2_CAPITAL.md` (pharma stock table section): the new script, sources per market, how many links were found, and that it must be rerun if the stock list changes (a price refresh keeps the column).
6. **Commit locally, do not push.** One commit, message starting `S² stock table: link company names to websites`, listing the files changed. Do not touch any other file (other untracked files in the repo are unrelated work — leave them alone).

## Do not
- change any numbers, columns, sort order, the CAGR column or the page header;
- edit `public/documents/s2/2026-10-pharma-listed-stocks.html` by hand;
- run `scripts/refresh_s2_pharma_stocks.py` or `scripts/add_s2_mcap_cagr.py`;
- `git push`.
