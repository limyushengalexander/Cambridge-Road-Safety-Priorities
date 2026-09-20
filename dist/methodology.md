# Cambridge pedestrian and cyclist safety audit screening

Analysis of user-downloaded Cambridge public datasets dated September 17, 2026. This is a provisional screen of reported crash concentrations, not an exposure-adjusted safety ranking or a finding about crash causes.

## Sources and coverage

- CPD Crash Log: https://data.cambridgema.gov/w/h6fp-bp8s/t8rt-rkcd — 15,485 rows, January 2, 2016–September 16, 2026.
- Police Department Crash Data Updated: https://data.cambridgema.gov/Public-Safety/Police-Department-Crash-Data-Updated/gb5w-yva3 — 17,084 rows, January 1, 2015–August 31, 2026.
- City context: https://www.cambridgema.gov/streetsandtransportation/policiesordinancesandplans/visionzero

Neither file has exact duplicate rows after trimming whitespace. Many timestamps repeat, so timestamps are not unique crash identifiers. The files share 15,366 distinct timestamps and were not appended. The simpler CPD log is the counting source; the detailed file is a cross-check only.

## Study population

Use January 1, 2023–December 31, 2025, excluding partial 2026. Every month is represented; this demonstrates calendar coverage, not complete reporting of all crashes. CPD contains 4,924 records in this window; the detailed file contains 4,926. Differences remain unreconciled and are not added to CPD counts.

Include a CPD record when Number of Cyclists > 0 or Number of Pedestrians > 0. This gives 696 crashes: 438 cyclist-involved, 260 pedestrian-involved, including two involving both. Annual totals are 231, 238, and 227. Counts describe crashes, not people. There are 514 crashes with at least one injured individual of any mode; the log does not establish that the injured person was the pedestrian or cyclist.

## Location processing and ranking

Trim whitespace, uppercase street names, remove punctuation, standardize common street suffixes, expand MASS AVE to MASSACHUSETTS AVE, and standardize MT AUBURN to MOUNT AUBURN. Sort each pair of two distinct, nonempty intersection street names so reversed orders match. Do not guess missing suffixes or merge potentially different streets.

430 eligible crashes have an explicit intersection pair; 266 (38.2%) do not. The latter remain in the analysis CSV as addresses or single-street descriptions, but are excluded from the intersection ranking. They have not been geocoded or assigned to defined street segments. Thus rankings are provisional and may change after location reconciliation. A whole-street count is not a segment-level risk measure.

Rank explicit intersections by eligible crash count, then by number of crashes with any injury; alphabetical order resolves remaining display ties. Preserve counts by year and road-user involvement. Avoid an arbitrary weighted risk score. Six intersections have at least six eligible crashes; retain all three tied at six rather than force a top five.

Of the 696 eligible CPD records, 689 have a timestamp unique in both datasets. Among those, 426 have matching normalized intersection pairs. Timestamp agreement is a candidate match, not proof of record identity. No detailed records were added to the counting source.

## Interpretation and practical actions

Use the shortlist to prioritize field audits and obtain walking, cycling, and vehicle counts. Review current road layout and recent changes before selecting interventions. Inspect crossings, visibility and turning interactions as audit questions, not proven causes. Compare recurrence across years; a three-year total can conceal a concentration in an earlier year.

Reported crashes omit unreported incidents and near misses. Without exposure counts, results cannot establish risk per traveler. Injury counts are not injury severity; Small counts fluctuate. These data alone cannot prove intervention effectiveness or explain changes over time.

## Website privacy and mapping

Only aggregate public-intersection, year, road-user and time-category counts are published. No incident timestamps, address-level records, hospitalization fields or person-level details are distributed. Injury summaries are limited to the fixed three-year shortlisted intersections (at least six eligible crashes) and are never cross-filtered. The replacement CSV contains intersection/year counts, including an unresolved-location summary.

Mapping uses the City of Cambridge TRANS_Intersections GeoJSON, obtained from its official GitHub repository on September 19, 2026. Normalized street pairs must match a unique official node; ambiguous and unmatched pairs are withheld. Coordinates are checked against the Cambridge-area extent and the authoritative city node inventory. The map locates public intersections, not crash-event positions. GIS source: https://github.com/cambridgegis/cambridgegis_data/tree/main/Trans/Intersections

Address-like or non-public pair labels (including numbered locations, private driveways, parking lots and shopping-center references) are withheld from public location views and grouped into the unresolved summary. This does not alter the original 430 explicit-pair study count.
