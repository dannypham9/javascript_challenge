var tableData = data;

var tBody = d3.select("tbody");

 //function to add a row for each ufo sighting//
    function table(data) {
    data.forEach((ufoSighting) => {
        var row = tBody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

    table(tableData);


        console.log(tableData);

//create a button to fitler and display date input//

var filter= d3.select("#filter-btn");

var dateInput = d3.select("#datetime");

    filter.on("click", function() {
    //stop page from refreshing//
    d3.event.preventDefault(); 
    tBody.html("");

    var ufo = dateInput.property("value");
    console.log(ufo);

    var newTable = tableData.filter(tableData => tableData.datetime === ufo);
    console.log(newTable);

    table(newTable);


});
