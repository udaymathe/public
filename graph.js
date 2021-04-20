// var ctx = document.getElementById('myChart').getContext('2d');
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data:  {
//         labels: ['January', 'February', 'March'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: ['#4c84ff','#fec402','#2B0B3F','#29cc97'],
//             data: [2, 2, 2,2],
//         }]
//     },
//     options: {legend: {
//                     display: false
//                 },
//                 cutoutPercentage: 70,}
// });


// $(function(){
//     $('#submit-btn').bind('click',function(){
        
// })
// }

// document.addEventListener('DOMContentLoaded', function(){
//     document.getElementById('submit-btn').addEventListener('click', function(){
        
//     })
// })

$.ajax({
        url: "/india/processing",
        type: "get",
        success: function(data){
        var data = [data.cement_content,
                    data.fa_content,
                    data.ca_content ];
            $("#graph").text(data.cement_content);
        }
    })






// $(document).ready(function(){
//     var _data;
//     var _labels;
//     $('#submit-btn').bind('click',function(){
//         $.ajax({
//             url: "/india/processing",
//             type: "get",
//             data: {vals: ''},
//             success: function(response) {
//             //full_data = JSON.parse(response.payload);
//             _data = [response.cement_content,
//                     response.fa_content,
//                     response.ca_content ];
//             _labels = ['Cement','CA','FA'];
//             },
        
//         });
//         new Chart(document.getElementById("myChart"), {
//         type: 'doughnut',
//         data: {
//             labels: _labels,
//             datasets: [
//                 {
//                 label: "Population (millions)",
//                 backgroundColor: ["#3e95cd", "#3cba9f","#e8c3b9"],
//                 data: _data
//                 }
//                 ]
//             },
//             options: {
//                 legend: { display: false },
//                 title: {
//                 display: true,
//                 text: 'Predicted world population (millions) in 2050'
//                 }
//             }
//         });
//         });
//     })






// {
//     var _data;
//     var _labels;
// $.ajax({
//     url: "/india/processing",
//     type: "get",
//     data: {vals: ''},
//     success: function(response) {
//     full_data = JSON.parse(response.payload);
//     _data = full_data['data'];
//     _labels = full_data['labels'];
//     },

// });
// new Chart(document.getElementById("bar-chart"), {
// type: 'bar',
// data: {
//     labels: _labels,
//     datasets: [
//     {
//     label: "Population (millions)",
//     backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//     data: _data
//     }
//     ]
//     },
//     options: {
//     legend: { display: false },
//     title: {
//     display: true,
//     text: 'Predicted world population (millions) in 2050'
//     }
//     }
// });
// })
// })