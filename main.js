

var multi_grid_gen = require('./multiplication_grid');

var grid_converter = require('./grid_converter');

var fs = require('fs');

//grab the 1st parameter passed to script call
var prime_size = process.argv[2];

var grid = multi_grid_gen.GenerateMultiplcationGrid(prime_size);

console_friendly_grid = grid_converter.ConvertGridToConsoleOutputArray(grid);

if(process.argv[3] !== undefined)
{
  fs.writeFile("./" + process.argv[3], console_friendly_grid.join("\n"), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
  }); 

}
else
{
  for(var i = 0; i < console_friendly_grid.length; ++i)
  {
    console.log(console_friendly_grid[i]);
  }
}
