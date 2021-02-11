const canva = d3.select(".canva");

var dataArray = [4, 15, 34, 44, 56];

//add an svg element
// const svg = canva.append('svg')
//                 .attr('width', '800')
//                 .attr('height', '600');

const svg = canva.append('svg')
            .attr('width', '600')
            .attr('height', 600);

// const rect = svg.append('rect');
const rect = svg.selectAll('rect');

rect.data(dataArray)
    .enter().append('rect')
    .attr('width', '24')
    .attr('fill','orange')
    .attr('height', function(d){
      return d*2;
    })
    .attr('x', function(d, i){
        console.log(d);
         return i*25;})
    .attr('y', function(d,i){
      return 100-(d*2)
    });

console.log(rect);
