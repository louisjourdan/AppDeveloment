var myData = {
    items: [
        {
            name: "Names",
            place: "Places",
            thing: "Things"
        },
        {
            name: "James",
            place: "Paris",
            thing: "Books"
        },
        {
            name: "Laura",
            place: "Mexico",
            thing: "Chairs"
        },
        {
            name: "Sam",
            place: "Italy",
            thing: "Paper"
        }
		]
};


function showTable() {
    var output = "";
    output = "<ul class='table1'>";
    for (var i = 0; i < myData.items.length; i++) {
        output += "<li> <span class='cellname'>" + myData.items[i].name + "</span>";
        output += "<span class='cellplace'>" + myData.items[i].place + "</span>";
        output += "<span class='cellthing'>" + myData.items[i].thing + "</span>";
        output += "</li>";
    }
    output += "</ul>"
    document.getElementById("demoTable").innerHTML = output;
}

function showList(){
    var output = "";
    output = "<ul class = 'list1'>";
    for (var i = 1; i < myData.items.length; i++) {
        output += "<li class = 'myList'>" + myData.items[0].name + ": " + myData.items[i].name + "<br/>";
        output +=  myData.items[0].place + ": " + myData.items[i].place + "<br/>";
        output += myData.items[0].thing + ": " + myData.items[i].thing + "<br/>";
        output += "</li>";
    }
    
    output += "</ul>";
    document.getElementById("demoList").innerHTML = output;
    
}


function showName(){
    var output = "<ul>";
    output += "<li onclick = display('James')>" + myData.items[1].name + "</li>";
    output += "<li onclick = display('Laura')>" + myData.items[2].name + "</li>"
    output += "<li onclick = display('Sam')>" + myData.items[3].name + "</li>"
    output += "</ul>"
    document.getElementById("demoName").innerHTML = output;
}

function display(name){
    if (name == 'James'){
        var info1 = myData.items[1].name + "-" + myData.items[1].place + "-" + myData.items[1].thing;
        document.getElementById("demoName2").innerHTML = info1;
    }
    if (name == 'Laura'){
        var info2 = myData.items[2].name + "-" + myData.items[2].place + "-" + myData.items[2].thing;
        document.getElementById("demoName2").innerHTML = info2;
    }
    if (name == 'Sam'){
        var info3 = myData.items[3].name + "-" + myData.items[3].place + "-" + myData.items[3].thing;
        document.getElementById("demoName2").innerHTML = info3;
    }
    
}
