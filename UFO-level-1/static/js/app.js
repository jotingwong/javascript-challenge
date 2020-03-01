// Author: JoTing Wong


// from data.js
var tableData = data;
console.log(tableData);

// ### Level 1: Automatic Table and Date Search (Required)

// * Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

var tbody = d3.select("tbody");

tableData.forEach(function(ufodata){
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(function([key,value]){
    var cell = row.append("td");
    cell.text(value);
    })
})


// * Use a date form in your HTML document and write JavaScript code 
// that will listen for events and search through the `date/time` column to find rows that match user input.

var button = d3.select("#filter-btn");
button.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);

    console.log(filteredData);

    var clearTable = d3.select("tbody");
    // remove information in the table
    clearTable.html("");

    filteredData.forEach(function(ufodata){
        var filteredRow = clearTable.append("tr");
        Object.entries(ufodata).forEach(function([key,value]){
        var cell = filteredRow.append("td");
        cell.text(value);
        })
    })
    
})


    
