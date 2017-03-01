# AVI-WX-API
- An Aviation Weather API transforming XML/Text data into JSONs
- To get information about an airport, use the Airports full ICAO code including the country letter. eg. for JFK use KJFK

# Most Recent METAR
- /metar/kfjk
- Abbreviated and current weather for the airport. Changes hourly or when weather changes
- https://aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=1.25&stationString=KFRG

# Most Recent TAF(Terminal Area Forcast)
- /taf/kjfk
- Provides 5 statute miles radius forcast weather from airport
- Some airports do not provide TAF services
- https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=tafs&requestType=retrieve&format=xml&hoursBeforeNow=0&stationString=PHTO

# NOTAMs (Work In Progress)
- Need to find viable source

# Resources
- http://services.faa.gov/docs/basics/ (FAA AIRPORT STATUS API, possible NOTAMs)

- ftp://tgftp.nws.noaa.gov/data/ (NOAA weather data(mostly in text) Routes for TAFs and METARs)

- 

#API v1 (Work In Progress)
- Most Recent METAR
- TAF
- Possible NOTAMS
- clean up json output

#API v2 
- In the event of wx source outage, store TAF data to provide continuous wx service 
