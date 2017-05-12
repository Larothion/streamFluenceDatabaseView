                     
function createDonut(data){
    if(!data){
        console.log("Lack of Data!");
        throw new Error("No data!");
    }
    Morris.Donut({
        element: 'morris-donut-chart',
        data: data,
        resize: true,
        colors: [
                    '#FF0000',
                    '#4B0082',
                    '#67C69D',
                    '#1E90FF',
                    '#696969'
                  ]
        // pointFillColors: #FF0000,


    });
};

$(document).ready(function() {
    var initalData = [ {
            label: "Deyusha",
            value: 2804598
        }, {
            label: 'Hotform',
            value: 4388616
        }, {
            label: "Pyroelementalist",
            value: 2944973
        }, {
            label: "Camobear",
            value: 40672
        }, {
            label: "Squillakilla",
            value: 988972
        }]
    //  morris donut chart on dashboard///
    createDonut(initalData);
  
});


