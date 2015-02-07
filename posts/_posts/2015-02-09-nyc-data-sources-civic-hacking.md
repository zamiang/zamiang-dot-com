---
layout: post
title: "Data Sources and Tools for Civic Hacking"
description: ""
category: post
tags: []
---

While working on [Vislet](http://www.vislet.com), I have been cataloging useful tools and interesting datasets. These are all tools that I have done something with and a description about what that was.

## NYC data sources

- [Bytes of the Big Apple](http://www.nyc.gov/html/dcp/html/bytes/applbyte.shtml): A large collection of data sources ranging from sidewalk cafes to shape files for every building in NYC.
- [NTA projection fix](https://gist.github.com/lxbarth/5452832): A fix the NTA shapefiles to allow ogr2ogr to convert it to other formats.
- [NYC Open Data](https://nycopendata.socrata.com/): General purpose aggregator for NYC related datasets
- [Stop and Frisk](http://www.nyclu.org/content/stop-and-frisk-data): The dataset includes race, gender and age of the person stopped as well as the location, time and date of the stop.
- [2013 NYC Taxi Data](http://chriswhong.com/open-data/foil_nyc_taxi/): Detailed NYC Taxi trip data
- [311 Service Requests](https://data.cityofnewyork.us/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9): All calls to 311 broken down by type with date and location.
- [ACRIS Data](http://www.nyc.gov/html/dof/html/property/rolling_sales_data.shtml): Property sales from 2003 on.
- [Crime Data](http://www.nyc.gov/html/nypd/html/analysis_and_planning/historical_nyc_crime_data.shtml): Crime data by precinct from 2003 on.
- [MTA Developer Resources](http://web.mta.info/developers/): API for interfacing with MTA data.
- [NYC API](https://developer.cityofnewyork.us/api): API including many endpoints with real time data such as 311 and BBL lookup.

## Country-wide Data Sources
- [ProPublica Data Store](https://projects.propublica.org/data-store/): Includes interesting business from public data sources but has been cleaned up. Some costs money.
- [American FactFinder](http://factfinder2.census.gov/faces/nav/jsf/pages/index.xhtml): A tool for exploring data from the Census and other country wide surveys.
- [NHGIS Data Finder](https://data2.nhgis.org/main): A tool for exploring what geographic data is available. Useful for mapping census data.

## Mapping tools

- [Mapshaper](mapshaper.org): Used for quickly transforming and simplifying shapefiles or geojson.
- [QGIS](http://www.qgis.org/en/site/): Primary OSS GIS software.
- [Mapzen](https://mapzen.com): Company that creates OS mapping tools.
- [Mapbox](https://www.mapbox.com/): Tool for creating custom maps.
- [LeafletJS](http://leafletjs.com/): Open source mapping tool used for [nyctaxi](http://nyctaxi.herokuapp.com/)
- [Cartodb](https://cartodb.com/): Way to create custom maps and host data. Also useful for normalizing geodata projections. Import multiple geo-data-files using different projects and then cartodb will export them in the same projection.

## Command line tools

- [ogr2ogr](http://www.gdal.org/ogr2ogr.html): Converts geo file formats.
- [topojson](https://github.com/mbostock/topojson): A compression format for topology about 80% smaller than geojson.
