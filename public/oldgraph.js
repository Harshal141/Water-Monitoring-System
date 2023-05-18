// map rendering for current location
// flow ph turbidity temp
var xValues = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'];
let olddatatype =  document.querySelector('#emailHelp').innerText;
console.log(olddatatype)

if(olddatatype == 'Weekly Data'){
    xValues = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'];
    var flow = [7,6,7,5,7,6,3];
    var ph = [6,7,5,7,4,7,5];
    var turb = [7,7,7,7,7,7,3];
    var temp = [7,7,7,7,7,7,3];
}else if(olddatatype == 'Monthly Data'){
    xValues = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var flow = [7,7,7,7,7,7,3];
    var ph = [7,7,7,7,7,7,3];
    var turb = [7,7,7,7,7,7,3];
    var temp = [7,7,7,7,7,7,3];
}else if(olddatatype == 'Yearly Data'){
    xValues = ['2015','2016','2017','2018','2019','2020','2021'];
    var flow = [7,7,7,7,7,7,3];
    var ph = [7,7,7,7,7,7,3];
    var turb = [7,7,7,7,7,7,3];
    var temp = [7,7,7,7,7,7,3];
}



        new Chart("flow", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: "#00AEEF",
            borderColor: "rgba(0,0,0,0.1)",
            data: flow
            }]
        }
        });

        new Chart("ph", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: "#00AEEF",
            borderColor: "rgba(0,0,0,0.1)",
            data: ph
            }]
        }
        });

        new Chart("temp", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: "#00AEEF",
            borderColor: "rgba(0,0,0,0.1)",
            data: temp
            }]
        }
        });

        new Chart("turb", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: "#00AEEF",
            borderColor: "rgba(0,0,0,0.1)",
            data: turb
            }]
        }
        });