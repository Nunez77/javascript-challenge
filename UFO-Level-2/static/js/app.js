// Complete all of Level 1 criteria.

// Using multiple input tags and/or select dropdowns,
// write JavaScript code so the user can to set multiple
// filters and search for UFO sightings using the following
// criteria based on the table columns:

// 1. date/time
// 2. city
// 3. state
// 4. country
// 5. shape

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create references
// Button
var button = d3.select("#filter-btn");
// Form Date & City
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("shape");
// Body
var $tbody = d3.select("tbody");
$tbody.html("");
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
    var inputCity = inputFieldCity.property("value").toLowerCase().trim();

    // Either Or Filtering
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    var filterCity = tableData.filter(tableData => tableData.city === inputCity);
    var filterState = tableData.filter(tableData => tableData.state === inputState);
    var filterCountry = tableData.filter(tableData => tableData.country === inputCountry);
    var filterShape = tableData.filter(tableData => tableData.shape === inputShape);

    // Combined filter of data
    var filterResults = tableData.filter(ufoSighting =>
        (ufoSighting.datetime === datetimeInput || !datetimeInput) &&
        (ufoSighting.city === cityInput || !cityInput) && 
        (ufoSighting.state === stateInput || !stateInput) &&
        (ufoSighting.country === countryInput || !countryInput) &&
        (ufoSighting.shape === shapeInput || !shapeInput)
        );



    let response = {
        filterDate, filterCity, filterCombinedData
    }

    if(response.filterCombinedData.length !== 0) {
        addData(filterCombinedData);
    }
        else if(response.filterCombinedData.length === 0 && ((response.filterDate.length !== 0 || response.filterCity.length !== 0))) {
            addData(filterDate) || addData(filterCity);
        }
        else {
                $tbody.append("tr").append("td").text("The selected criteria does not meet registered findings.");
        }

})
