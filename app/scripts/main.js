d3.selectAll('p').style('color', 'blue');

// svg
const a = document.getElementsByClassName(".camva")
const canva = d3.select(".canva");

console.log(a);

//add an svg element 
const svg = canva.append('svg')
                .attr('width', '800')
                .attr('height', '500');
svg.append('circle').attr("cx", "340")
                    .attr("cy", "34")
                    .attr('r', "50")
                    .attr('fill', "Blue");

