import GraphQLManager from '../assets/GraphQLManager';
process.env['REACT_APP_API_URI'] = 'https://countries-274616.ew.r.appspot.com/';

test('GetGraphQLData() sucessfully returns data', async () => {

  const query = `query {
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
  }`;

  const result = JSON.stringify(await GraphQLManager.GetGraphQLData(query));
  const hasNativeName = result.includes("nativeName");
  const hasCapital = result.includes("capital");

  expect(hasNativeName).toBe(true);
  expect(hasCapital).toBe(true);

});