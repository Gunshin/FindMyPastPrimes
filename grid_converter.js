

function ConvertGridToConsoleOutputArray( grid )
{
  if(grid.length <= 1)
  {
    return [];
  }
  
  //this is for calculating the max size of the largest number in the grid.
  //this will help with keeping the grid in a nice format
  var cell_size = grid[grid.length - 1][grid[grid.length - 1].length - 1].toString().length;
  var lines = Array(grid.length);
  
  //initialise the output lines otherwise we get undefined's
  for(var i = 0; i < grid.length; ++i)
  {
    lines[i] = "";
  }

  //the first line is just the prime numbers, so the first cell is actually empty
  //we are therefor doing this step seperately from the rest
  lines[0] = " ".repeat(cell_size) + "|";

  for(var i = 0; i < grid.length; ++i)
  {
    for(var j = 0; j < grid[i].length; ++j)
    {
      lines[i] += " ".repeat(cell_size - grid[i][j].toString().length) + grid[i][j] + "|";
    }
  }
  
  return lines;
}


module.exports.ConvertGridToConsoleOutputArray = ConvertGridToConsoleOutputArray;