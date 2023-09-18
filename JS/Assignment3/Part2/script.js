function convert() {
    var files = document.getElementById("csvfile").files;
    
    if(files.length > 0){
        var file = files[0];
        
        // create file reader object
        var reader = new FileReader()

        // read file as string
        reader.readAsText(file);

        // load event
        reader.onload = function (e) {
            // read file data
            var csvData = e.target.result;

            // split line
            var rowData = csvData.split("\n");

            // select table body
            var tableBody = document.getElementById("mainTable").getElementsByTagName("tbody")[0];
            tableBody.innerHTML = "";

            // create row and column and insert element
            for(var row = 0; row < rowData.length; row++){
                // insert new row
                var newRow = tableBody.insertRow();

                // get column data
                var rowColData = rowData[row].split(",");

                for(var col = 0; col < rowColData.length; col++){
                    // insert new cell
                    var newCell = newRow.insertCell();
                    newCell.innerHTML = rowColData[col];
                }

            }
        };
        
    } else{
        alert("Please select file.");
    }
}



document.querySelector("button").onclick = function() {convert()};