const canva = d3.select(".canva");

var dataArray = [4, 15, 34];

//add an svg element
// const svg = canva.append('svg')
//                 .attr('width', '800')
//                 .attr('height', '600');

const svg = canva.select('svg');

// const rect = svg.append('rect');
const rect = svg.selectAll('rect')

rect.attr('width', '24')
    .data(dataArray)
    .attr('fill','orange')
    .attr('height', function(d){
      return d*2;
    })
    .attr('x', function(d, i){
        console.log(d);
         return i*25;});

console.log(rect);
