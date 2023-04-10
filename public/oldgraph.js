// map rendering for current location
// flow ph turbidity temp
var xValues = ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6','Week 7'];
var flow = [7,7,7,7,7,7,3];
var ph = [7,7,7,7,7,7,3];
var turb = [7,7,7,7,7,7,3];
var temp = [7,7,7,7,7,7,3];

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