var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
};

exports.isUrlInList = function(url, callback) {
};

// url === ../archives/sites.txt
exports.addUrlToList = function(url, callback) {
  fs.appendFile(exports.paths.list, url, function(err) {
    if (err) {  
      throw err; 
    }
  });
  console.log('Saved!');
  // this callback will say if err, throw err, console.log (saved!)
};
// './sites/www.google.com'
exports.isUrlArchived = function(url, callback) {
  //search our sites directory for our url
  fs.exists(url, (exists) => {
    callback(exists);
  });
  //call the callback on the boolean value of the result
};

exports.downloadUrls = function(urls) {
};
