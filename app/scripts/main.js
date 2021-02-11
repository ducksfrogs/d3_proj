d3.selectAll('p').style('color', 'blue');

// svg
const a = document.getElementsByClassName(".camva")
const canva = d3.select(".canva");

console.log(a);

//add an svg element 
const svg = canva.append('svg')
                .attr('width', '800')
                .attr('height', '600');
svg.append('circle').attr("cx", "340")
                    .attr("cy", "34")
                    .attr('r', "50")
                    .attr('fill', "Blue");


svg.append('rect').attr('width', '10')
                .attr('height', '40')
                .attr('x', '40')
                .attr('y', '50');


svg.append('rect').attr('width', '100')
                .attr('height', '100')
                .attr('x', '40')
                .attr('y', '50')
                .attr('rx', 15);

svg.append('text').text("hello there")
            .attr("x",100)
            .attr('y', 300)