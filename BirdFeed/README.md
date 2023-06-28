# BirdFeed

With BirdFeed, users can find real-time, location-specific data for birdwatching. This will include:

* Nearby birding hotspots
* Migration map based on region
* Ability to find recent sightings of a searched species

## Relevant Resources & Integration Points
**MapBox Developer Documentation:** https://birdcast.info/migration-tools/local-migration-alerts/

**eBird API:** https://documenter.getpostman.com/view/664302/S1ENwy59?version=latest#intro 

## Future Improvements
* Define species dict from CSV response pulled from https://{{serverName}}/{{contextRoot}}/ref/taxonomy/ebird, instead of using static mapping (in case code <> common name mappings evolve)
- Add better localization options (maybe zip code, instead of town name?)
- Add loading spinners while content is being populated