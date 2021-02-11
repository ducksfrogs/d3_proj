const canva = d3.select(".canva");

// var dataArray = [4, 15, 34, 44, 56];

var dataArray = [
  {width: 25, height: 4, fill: 'pink'},
  {width: 25, height: 10, fill: 'blue'},
  {width: 25, height: 30, fill: 'blue'},
  {width: 25, height: 60, fill: 'gray'},
  {width: 25, height: 40, fill: 'red'}
]


//add an svg element
// const svg = canva.append('svg')
//                 .attr('width', '800')
//                 .attr('height', '600');

const svg = canva.append('svg')
            .attr('width', '600')
            .attr('height', 600);

// const rect = svg.append('rect');
const rect = svg.selectAll('rect');

d3.json('https://jsonplaceholder.typicode.com/todos/1').then(
  data=>{
    console.log(data.userId);
    console.log(data.title);
    console.log(data);
  }
)
rect.data(dataArray)
    .enter().append('rect')
    .attr('width', '24')
    .attr('fill', function(d){ return d.fill; })
    .attr('height', function(d){
      return d.height*2;
    })
    .attr('x', function(d, i){
         return i*25;})
    .attr('y', function(d,i){
      return 100-(d.height*2)
    });
