function compare() {
    var json1 = document.getElementById("input1").value;
    var json2 = document.getElementById("input2").value;
    
    if(json1.startsWith("{") && json1.endsWith("}") && json2.startsWith("{") && json2.endsWith("}")){

    }else{
        document.getElementById("res").innerHTML = "Enter valid JSON.";
        return;
    }

    let obj1 = JSON.parse(json1);
    let obj2 = JSON.parse(json2);
    console.log(obj1);
    console.log(obj2);
    
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        console.log("Both JSON are not equal.");
        document.getElementById("res").innerHTML = "Not equal.";
        return;
    }

    const sortedObj1 = Object.keys(obj1).sort().reduce(
        (obj, key) => {
            obj[key] = obj1[key];
            return obj;
        },{}
    );

    const sortedObj2 = Object.keys(obj2).sort().reduce(
        (obj, key) => {
            obj[key] = obj2[key];
            return obj;
        },{}
    );

    var flag = 0;

    function recurse(sortedObj1, sortedObj2) {
        for(var key in sortedObj1){
            if(sortedObj1.hasOwnProperty(key)) {
                // check type of the key
                if(typeof sortedObj1[key] === "object"){
                    recurse(sortedObj1[key], sortedObj2[key]);
                } else{
                    if(sortedObj1[key]!=sortedObj2[key])
                        flag = 1;
                }
            }
        }
    }

    recurse(sortedObj1,sortedObj2);

    if(flag==0){
        console.log(flag);
        console.log("Both JSON are equal.");
        document.getElementById("res").innerHTML = "Both JSON are equal.";
    } else{
        console.log(flag);
        console.log("Both JSON are not equal.");
        document.getElementById("res").innerHTML = "Both JSON are not equal.";
    }
}

document.getElementById("btn").onclick = function () {compare()};