# Production release and GSC guardrails

## Before deployment

1. Confirm the actual production branch, static publish directory, CDN cache policy and extensionless-route rewrite rules. Production previously served a different state from this repository.
2. Test `/`, `/release-date`, `/platforms`, `/steam-price-and-availability`, `/multiplayer-guide`, `/guides`, `/media`, `/wiki` and `/wiki-buildings` on the staging host. Every sitemap URL must return `200` with its canonical URL intact.
3. Verify the live official Steam page and official site first. Update `RELEASE_STATUS_SOURCE_REGISTER.md` before changing an availability statement, structured data or title.
4. Confirm no old release date, countdown, price, confirmed platform or known-bug claim remains in page content, metadata, FAQ JSON-LD or scripts.
5. On a 390 px viewport, verify that navigation and the source-status card are visible and that existing ad containers do not cover either. Do not remove ads as part of this check.
6. Validate JSON-LD, canonical tags, internal links and `noopener noreferrer` on external official links.

## First 14 days after deployment

Check daily: 404s, sitemap reachability, canonical/indexability, source-link failures and conflicts between official sources.

Check weekly in GSC: Home, Release Status, Guides, Media, Wiki and Buildings. Segment queries into brand, release, platform, multiplayer and gameplay.

* If a brand or home CTR falls, check status accuracy and the SERP snippet before changing a title.
* If a hub has impressions but CTR below 1%, improve its first answer and title before adding bulk pages.
* If Buildings sustains its strong CTR, expand only source-checked building, animal and vehicle references.
* When an official status changes, update the source register and Release Status before any keyword work.

## 14- and 28-day decisions

Record the baseline and compare click, impression, CTR and average position by page and query group. Run one title/description experiment on one page at a time and allow a 14-day observation window. Do not collect account data, Steam IDs or in-game telemetry in GA4 events.
