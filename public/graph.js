// map rendering for current location
// flow ph turbidity temp
var xValues = ['28/04/23','27/04/23','26/04/23','25/04/23','24/04/23','23/04/23','22/04/23'];

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