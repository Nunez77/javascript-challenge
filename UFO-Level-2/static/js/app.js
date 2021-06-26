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

// Bring data from file
var tableData = data;

// YOUR CODE HERE!

// Table refereces
var tbody = d3.select("tbody");

// Function to build new table according to selected criteria
function buildTable(tableData) {
  // Clear previous search data
  tbody.html("");

  // For each row that meets criteria, insert new row
  tableData.forEach((dataRow) => {

    // Append new row to filtered table
    var row = tbody.append("tr");

    // For each row that meets the criteria insert append each column
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

// Identify user input and use the selected criteria to apply a filter to the data
function applycriteria() {

  // Prevent browser from executing default action 
  d3.event.preventDefault();

  // Get user selections to stablish search/filter criteria
  var date = d3.select("#datetime").property("value");
  var city = d3.select("#city").property("value");
  var state = d3.select("#state").property("value");
  var country = d3.select("#country").property("value");
  var shape = d3.select("#shape").property("value");

  let filteredData = tableData;

  // If user wants a specific date, apply it to the filter
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  // If user wants specific city, apply it to the filter
  if (city) {
    filteredData = filteredData.filter(row => row.city === city);
  }
  // If specific state is selected, apply it to the filter
  if (state) {
    filteredData = filteredData.filter(row => row.state === state);
  }
  // If specific country is selected, apply ti to the filter
  if (country) {
    filteredData = filteredData.filter(row => row.country === country);
  }
  // If specific shape is selected, apply to filter
  if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape);
  }
 // Build final table
  buildTable(filteredData);
}

// When button is clicked, display table according to selections
d3.selectAll("#filter-btn").on("click", applycriteria);

// Pending
// buildTable(tableData);

filterResults.forEach((filteredData) => {
    console.log(filteredData);
    row = tbody.append("tr");
    Object.values(filteredData).forEach(value => row.append("td").text(value));
    })