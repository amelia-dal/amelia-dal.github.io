
d3.json('https://github.com/TaranRamchandani22/CovidByBorough/blob/main/data/totalData.json', function(err, rows){ //use an http link,
      function unpack(rows, key) { // upack takes the row of data ans returns the value of a specific key in the row
          return rows.map(function(row) { return row[key]; });
      }

       var data = [{
            type: 'choropleth',
            locations: unpack(rows, 'CODE'),
            z: unpack(rows, 'GDP (BILLIONS)'),//put what you want to return
            text: unpack(rows, 'COUNTRY'),
            colorscale: [
                [0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],
                [0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],
                [0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']],
                //mapdata file link using http file
            autocolorscale: false,
            reversescale: true,
            marker: {
                line: {
                    color: 'rgb(180,180,180)',
                    width: 0.5
                }
            },
            tick0: 0,
            zmin: 0,
            dtick: 1000,
            colorbar: {
                autotic: false,
                tickprefix: '$',
                title: 'GDP<br>Billions US$'
            }
      }];

      var layout = {
          title: '2014 Global GDP<br>Source: <a href="https://www.cia.gov/library/publications/the-world-factbook/fields/2195.html"> CIA World Factbook</a>',
          geo:{
              showframe: false,
              showcoastlines: false,
              projection:{
                  type: 'mercator'
              }
          }
      };
      Plotly.newPlot("myDiv", data, layout, {showLink: false});
});
