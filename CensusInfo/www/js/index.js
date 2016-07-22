$(function () {
    jQuery.support.cors = true;
    $("#al").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:01",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];
                    
                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#az").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:04",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ak").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:02",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ar").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:05",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ca").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:06",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#co").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:08",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ct").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:09",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#de").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:10",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#fl").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:12",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ga").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:13",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#hi").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:15",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#id").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:16",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#il").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:17",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ia").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:19",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#in").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:18",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ks").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:20",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ky").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:21",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#la").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:22",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#me").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:23",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#md").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:24",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ma").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:25",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#mi").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:26",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#mn").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:27",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#mo").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:29",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ms").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:28",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#mt").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:30",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nc").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:37",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nd").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:38",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ne").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:31",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nh").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:33",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nj").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:34",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nm").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:35",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#nv").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:32",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ny").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:36",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#oh").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:39",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ok").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:40",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#or").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:41",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#pa").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:42",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ri").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:44",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#sc").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:45",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#sd").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:46",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#tn").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:47",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#tx").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:48",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#ut").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:49",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#va").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:51",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#vt").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:50",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#wi").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:55",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#wa").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:53",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#wv").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:54",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});

$(function () {
    jQuery.support.cors = true;
    $("#wy").click(function () {

        $.ajax({
            type: 'GET',
            url: "http://api.census.gov/data/2010/sf1?key=9d330528a97ef8c6c579a1f491ecf0fc6fb32750&get=P0010001,H00010001,NAME&for=county:*&in=state:56",
            success: function (resp) {
                var output = "";
                output = "<table data-role='table' class='ui-responsive'>"
                output += "<tr> <th> County </th>";
                output += "<th> Population </th>";
                output += "<th> Households </th>";
                output += "</tr> <br/>";
                for (i = 1; i < resp.length; i++) {

                    var values = resp[i];
                    var pop = values[0];
                    var household = values[1];
                    var name = values[2];

                    output += "<tr> <td>" + name + " </td>";
                    output += "<td>" + pop + " </td>";
                    output += "<td>" + household + "</td>"
                    output += "</tr>";
                }
                output += "</table>"
                document.getElementById("table").innerHTML = output;
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    });
});