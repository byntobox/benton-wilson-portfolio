# Portfolio review — 17 November 2026

## Preview

Open `index.html` in a browser directly. All three pages use relative file paths and need no build step, installation, API key, or backend.

For a local HTTP preview, run this from the project folder:

```powershell
py -m http.server 4173 --bind 127.0.0.1
```

Then open <http://127.0.0.1:4173/>. Stop the server with Ctrl+C.

## Changes

- Kept the static HTML/CSS/JavaScript architecture and navy, cream, blue, and mint palette. Removed external font requests and decorative animations.
- Put the name, professional positioning, value statement, project preview, résumé, and contact routes at the top. The official current employment title remains Retail Systems Analyst, including structured metadata.
- Moved Selected Work ahead of Experience. Kept older roles in a native, keyboard-accessible disclosure. Replaced aging experience counters with “since 2019.”
- Added `storeflow.html` with architecture, decisions, validation behavior, honest sample results, source links, and limitations. Added `automation.html` with a public professional contribution overview.
- Preserved the original screenshot and its proportions; the case study links to the full-size image. No live demo is claimed.
- Made navigation and email work without JavaScript. Enhanced mobile navigation supports Escape, destination focus, Tab exit, outside click, and breakpoint reset. Content no longer depends on reveal observers.
- Updated SPC to A.S. Computer Programming and Analysis. WGU completion in February 2026 and the current role/certifications were confirmed by the owner during this task.

## Checks completed

- Clean starting Git tree; no applicable AGENTS.md found in the project or ancestor directories. No deployment, push, hosting/access change, or résumé PDF modification.
- Chrome browser checks on all three pages at 1440, 1024, 768, 390, and 320 CSS pixels. No document-level horizontal overflow or missing images. Screenshots reviewed at desktop, tablet, and narrow mobile sizes.
- axe-core WCAG A/AA and best-practice checks: no detected violations in the final runs at 1440, 768, and 320px. Remaining automated review items are decorative arrow/menu glyphs, which inherit the verified text colors and are hidden from assistive technology. This is not a claim of complete WCAG conformance.
- Tested skip link, mobile open focus, Escape return, Tab leaving the menu, anchor destination focus, sticky-header clearance, resize reset, and native Earlier experience disclosure.
- Tested all three pages at 320px with JavaScript disabled: content and navigation visible, working email URLs, no horizontal overflow. Tested reduced motion: no active animation and automatic scrolling.
- All 25 local asset/link destinations returned successful HTTP responses and all hash targets exist. Full-size screenshot navigation and résumé download worked; the résumé response is a valid PDF. Email destination was checked without sending mail.
- GitHub profile/repository returned HTTP 200. The linked public source files were read through the GitHub connector. LinkedIn returned HTTP 999 to automated retrieval; the existing profile URL was retained and needs a normal-browser check.
- JavaScript syntax, balanced HTML elements, one h1 per page, unique IDs, manifest/structured-data JSON, and Git whitespace checks passed.
- No browser console errors or failed local asset requests in the layout run. Images have explicit dimensions and retain their aspect ratios.

### Final contrast calculations

Ratios use WCAG relative luminance, without rounding a failing value up to a pass.

| Pair | Ratio |
| --- | ---: |
| White on blue button `#185dcc` | 6.04:1 |
| Blue `#185dcc` on cream `#f4f1e9` | 5.35:1 |
| Muted body text `#505e6e` on cream | 5.87:1 |
| Blue on light evidence panel `#e9edf2` | 5.14:1 |
| Light blue `#8bb7ff` on navy | 9.30:1 |
| Muted text `#b8c5d5` on navy card | 9.16:1 |
| Mint focus on navy card | 13.18:1 |
| Blue focus on cream | 5.35:1 |
| Navy button focus on cream | 16.78:1 |

Keyboard interaction confirmed 3px mint outlines on dark surfaces, blue outlines on cream links, and navy outlines with a white separator around light-surface primary buttons. Decorative card dividers are not relied on to identify controls.

### Performance and zoom limitations

The first localhost Chrome homepage load at 1440px reported LCP 172ms, DOMContentLoaded 36ms, and CLS 0 during the observation window. Subsequent layout loads were cached. These are unthrottled local lab observations, not real-user Core Web Vitals or production/network performance results. The final desktop hero is about 633px tall, down from the original 760px section minimum; the separate sticky header is 81px tall.

320px reflow was tested, covering the effective layout width of a 1280px window at 400% browser zoom. Native browser zoom was not verified: zoom shortcuts did not change the in-app browser's scale. A supplemental CSS `zoom` experiment passed at 200% but overflowed at 400%; CSS zoom does not trigger responsive breakpoints like browser zoom and is not treated as a native-zoom pass or failure.

Remaining manual checks: native 200%/400% browser zoom and text resizing, screen-reader reading order, Safari/Firefox and physical touch devices, LinkedIn while signed out, and the local mail client's handling of `mailto:`. No email was sent.

## StoreFlow evidence and screenshot blocker

Reviewed the public README, schema, sample generator, loader, transformation, validation, orchestrator, dashboard, and test file from [the StoreFlow repository](https://github.com/byntobox/storeflow-retail-reconciliation). The architecture/validation/walkthrough Markdown files and test file were empty; technical claims were checked against implementation instead.

Ran the unmodified sample generator with its seed of 42 and evaluated transformation and summary-validation functions in memory. Simulated fact uniqueness using the schema's transaction-line key. Reproduced 180 files, 16,427 staged rows, 16,229 unique accepted rows, 165 rejected rows, and 33 duplicates. Four failing checks detect input problems; the fifth compares 213,325.18 in eligible staged sales against 212,905.03 in deduplicated facts. All eight outcomes match the published sample. This was function-level evaluation, not an end-to-end database run or the repository's test suite.

Attempted a fresh PostgreSQL setup in an isolated temporary database on localhost. The public `database/schema.sql` stops at line 223 because `validation_results` is not defined before its indexes are created. No working application screenshot could be captured without repairing the separate StoreFlow project. The temporary database was stopped. The existing screenshot remains byte-for-byte unchanged, including its browser chrome; no image or test results were fabricated.

## Factual alignment and owner follow-up

1. **Résumé PDF — resolved before publishing:** the initial local checkout was two commits behind the remote repository. Remote commit `64f66dd` already corrected the résumé to “Associate of Science in Computer Programming and Analysis,” and `278ca8b` updated the profile photo. Both were brought into the working tree and preserved without further asset edits. The PDF lists WGU dates October 2024–February 2026; the site explicitly says completed, as confirmed. Adding StoreFlow and Visionworks to the PDF remains optional future résumé work.
2. **StoreFlow asset/setup:** supply the missing `validation_results` table definition or a clean application-only screenshot from a working checkout. Repairing the separate project's schema, reconciliation, and tests would make it easier for reviewers to reproduce the work.
3. **Optional factual polish:** SPC completion year, certification verification links/dates, exact Visionworks dates (currently preserved as approximate), and a public-safe quantified result or artifact for the professional initiative. No unsupported savings or business-impact metrics were added.

The existing social image was retained. After the owner authorized publication to `https://bentonjwilson.info/`, canonical URLs, absolute social-image URLs, page sharing metadata, and `sitemap.xml` were added for that domain.

## Research used as guidance

The design follows the supplied direction on scannable copy, meaningful headings, evidence, and restrained motion. These sources are usability guidance, not evidence of hiring outcomes:

- [Intuit: software engineer portfolios](https://www.intuit.com/blog/global-stories/software-engineer-portfolio/)
- [GitHub: enhancing a résumé with a profile](https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume)
- [Nielsen Norman Group: reading online](https://www.nngroup.com/articles/how-people-read-online/)
- [Nielsen Norman Group: visual hierarchy](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/)
- [Nielsen Norman Group: scroll animations](https://www.nngroup.com/articles/scroll-animations/)
- [W3C: text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [W3C: non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)
