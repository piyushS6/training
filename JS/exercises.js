// alert("Second script");

/*
async function showJson(src, ele) {
    // read json
    let response = await fetch(src);
    let result = await response.json();

    for(var key in result){
        
        if(result.hasOwnProperty(key)){
            
            if(ele===`${key}`){
                if(typeof result[key]==="object"){
                    console.log(result[key]);
                    
                }
                console.log(`${key} : ${result[key]}`);
            }
            // console.log(`${key} : ${result[key]}`);
        }
    }

    console.log(result);
}

showJson("sample.json", "editor");
*/

// Problem no 2
// resursive way
/*
async function showJson(src, ele) {
    // read json
    let response = await fetch(src);
    let res = await response.json();


    function recurse(res) {
        for(var key in res){

            if(res.hasOwnProperty(key)) {
                // check type of the key
                if(typeof res[key] === "object"){
                    if(ele===`${key}`)
                        console.log(`${key}: ${res[key]}`);
                    recurse(res[key], key);
                } else{
                    if(ele===`${key}`)
                        console.log(`${key}: ${res[key]}`);
                }
            }
        }
    }

    recurse(res);
}

showJson("sample.json", "author"); 
*/



// Problem no 1
// Convert csv string into 2D array

function CSVString_to_2D_Array(data, delimiter = ",") {
    // Separating titles
    const title = data.slice(0, data.indexOf("\n")).split(delimiter);
    console.log(title);

    // Separating values
    const values = data.slice(data.indexOf('\n') + 1).split('\n');
    console.log(values);

    const finalArray = values.map(function (v) {
        const currentVal = v.split(delimiter);

        // key value pair will be store in an object
        const storeKeyVal = title.reduce(
            function(obj, title, index) {
                obj[title] = currentVal[index];
                return obj;
            }, {});
        
            return storeKeyVal;
    });

    return finalArray;
}

var csvString = "Name,Rank\nNed,01\nRobert,02";

var ans1 = CSVString_to_2D_Array(csvString);
console.log(ans1);