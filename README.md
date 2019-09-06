# FindMyPastPrimes


Can be installed with "npm install" which will install the dev dependencies "mocha" and "chai" for unit testing. Requires NodeJS to be installed to be ran.


Can be ran with NodeJS via the below commands:

This command will output to the console.
node main <prime_count>

This command will output to text file.
node main <prime_count> <text_file_name>

This command will allow prime generation of large(r) sets without getting a heap issue.
node main <prime_count> NoOutput




Improvements:

The biggest improvement that could be made would be to write a new flow for converting/outputting the grid as it is generated to help avoid the heap out of space error i face. This would be due to the fact that i would not be storing the whole grid at the same time, and instead would only require to know row by row, or perhaps even cell by cell. However, printing such large sets to file would likely be impractical given the huge volume of data that would be generated for 10000+ sets.

The next biggest improvement would be to read up on how to better improve the performance of validating a prime number.

Should have added a try catch for the heap allocation error, as it is not a good idea to leave an erroring program to just core dump.



Given the complexity of the test, i believe i have provided a nice clean interface and testing solution for the base functions, and tried to keep the "main" script as simple as i could to tie together user input with functions that were created for the desired output.