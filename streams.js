// Load module dependencies
var fs = require('fs');
var zlib = require('zlib');

// Create read and write streams based on the passed in parameters
var inFile = fs.createReadStream(process.argv[2]);
var outFile = fs.createWriteStream(process.argv[3]);

// Gzip the selected source file
inFile.pipe(zlib.createGzip()).pipe(outFile);