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
// Body
var $tbody = d3.select("tbody");
// Button
var button = d3.select("#filter-btn");
// Form
var form = d3.select("#form");
// Original list
var filters = d3.select("#filters");
// Available variables for users
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var inputFieldState = d3.select("#state");
var inputFieldCountry = d3.select("#country");
var inputFieldShape = d3.select("#shape");

// Columns
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Create function
function criteriaTable(table, data) {
    tableHtml= d3.select("tbody")
    tableHtml.html("")
    // For each column in the data set
    for (let element of data) {
      // Insert row each time criteria is met
      let row = table.insertRow();
      // For each row in each column
      for (key in element) {
        // Insert new cell in each column each time criteria is met
        let cell = row.insertCell();
        // Creates text node. A text node encapsulates XML character content.
        let text = document.createTextNode(element[key]);
        // Appends row in column that met criteria to the new text node
        cell.appendChild(text);
      }
    }
  };
  // Assign original table to variable
  let table = document.querySelector("tbody");
  criteriaTable(table, tableData);
 // --------------------------------------------

 // Apply user selections
function filterData(userInput){
    input=d3.select(userInput);
    inputValue=input.property("value");  
  return inputValue
}

// select the button(event)
filterButton=d3.select("#filter-btn");

// call `on` (event lessener) to run the function that will work 
filterButton.on("click",() => {
   // filter the input from the table
    filterTable=tableData.filter(item => (item.datetime === filterData("#datetime") || filterData("#datetime") === "") 
    && (item.city === filterData("#city") || filterData("#city") === "")
    && (item.state === filterData("#state") || filterData("#state") === "")
    && (item.country === filterData("#country") || filterData("#country") === "") 
    && (item.shape === filterData("#shape") || filterData("#shape") === ""));
    console.log("filterTable",filterTable);
    criteriaTable(table,filterTable);


});

// reset the table from the begnning button 
resetButton=d3.select("#reset-btn")
resetButton.on("click",() => {
    criteriaTable(table,tableData)
    // clear the input fileds 
    document.getElementById('datetime').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
    document.getElementById('country').value = ''
    document.getElementById('shape').value = ''
});