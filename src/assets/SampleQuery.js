const SampleQuery = {
    query: `query {
        Country(alpha2Code: "SE") {
          name
          nativeName
          population
          convertedArea(areaUnit: SQUARE_MILES) {
            populationDensity
          }
          capital
          location {
            latitude
            longitude
          }
          currencies {
            name
            symbol
          }
          flag {
            emoji
            svgFile
          }
        }
    }`
}

export default SampleQuery;