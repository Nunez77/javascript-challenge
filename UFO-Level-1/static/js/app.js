// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
// Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.


// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create references
// Button
var button = d3.select("#filter-btn");
// Form
var inputFieldDate = d3.select("#datetime");
// Body
var $tbody = d3.select("tbody");
// Columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Displaying search results
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);

// Setting up the Filter Button for Date
button.on("click", () => {

    d3.event.preventDefault();

    var inputDate = inputFieldDate.property("value").trim();

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);

    $tbody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }
        else {
            $tbody.append("tr").append("td").text("No sightings reported at the given date.");
        }
})
