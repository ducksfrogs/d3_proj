const canva = d3.select(".canva");

var dataArray = [4, 15, 34];

//add an svg element 
// const svg = canva.append('svg')
//                 .attr('width', '800')
//                 .attr('height', '600');

const svg = canva.append('svg');

const rect = svg.append('rect');
rect.attr('width', '24')
    .data(dataArray)
    .attr('height', 100)
    .attr('x', function(d, i){ 
        console.log(d);
        console.log(i);
         return d*20;})
