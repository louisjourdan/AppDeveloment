window.onload = function(){
    document.addEventListener("deviceready",init,false);
    
    //init();
    getTrain(); 
}

function init(){
    document.getElementById('btnTrain').addEventListener('click', getTrain, false);
}

function getTrain(){
    $.ajax({
        type: "GET",
        url: "http://www3.septa.org/hackathon/Arrivals/90404/10",
        dataType: "text",
        success: function(result) {showTrain(result);}
    });
    
}

function showTrain(result){
    var data = jQuery.parseJSON(result);
    
    var arr = data[Object.keys(data)];
    var northbound = arr[0].Northbound;
    var southbound = arr[1].Southbound;
    
    var output = "<table style = 'width:100%'>";
    output += "<tr> <th colspan = '3'>Northbound</th> </span> </tr>";
    output += "<tr span class='row1'> <td>ID</td> <td>Time</td> <td>Destination</td> </tr>";
    for(i=0; i<northbound.length; i++){
        output += "<tr> <td>" + northbound[i].train_id + "</td>";
        output += "<td>" + northbound[i].depart_time + "</td>";
        output += "<td>" + northbound[i].destination + "</td>";
        output += "</tr> <br/>";
    }
    output += "</table>"
    
    output += "<table style = 'width:100%'>";
    output += "<tr> <th colspan = '3'>Southbound</th> <tr>"
    output += "<tr span class='row1'> <td>ID</td> <td>Time</td> <td>Destination</td> </span> </tr>";
    for(i=0; i<southbound.length; i++){
        output += "<tr> <td>" + southbound[i].train_id + "</td>";
        output += "<td>" + southbound[i].depart_time + "</td>";
        output += "<td>" + southbound[i].destination + "</td>";
        output += "</tr> <br/>";
    }
    output += "</table>"
    
    document.getElementById("resultTrain").innerHTML = output;
}