var source = $("#template").html();
var template = Handlebars.compile(source);

var data = {
    countries: [ {
        country: {
            countryCode: "BY",
            countryName: "Belarus"
            population: "9,685,000",
            english?: "",
        },
       country: {
            countryCode: "BZ",
            countryName: "Belize"
            population: "314,522",
            english?: "Yes",
    },
       country: {
            countryCode: "CA",
            countryName: "Canada"
            population: "33,679,000",
            english?: "Yes",

    }, country: {
            countryCode: "CC",
            countryName: "Cocos [Keeling] Islands"
            population: "628",
            english?: "Yes",
    },
      country: {
            countryCode: "CD",
            countryName: "Democratic Republic of Congo"
            population: "70,916,439",
            english?: "Yes",
    },
      country: {
            countryCode: "CF",
            countryName: "Central African Republic"
            population: "4,844,927",
            english?: "",
    },
      country: {
            countryCode: "CG",
            countryName: "Republic of the Congo"
            population: "303,9126",
            english?: "",
    },
      country: {
            countryCode: "CH",
            countryName: "Switzerland"
            population: "7,581,000",
            english?: "Yes",
      },
    } ]
};

Handlebars.registerHelper('countries', function(country) {
  return country.countryCode + " " + country.countryName + " " + country.population + " " + country.english?;
});

$('#table').append(template(data));
