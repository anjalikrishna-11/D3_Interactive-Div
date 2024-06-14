// U35346496
//  D3.js
// script.js

function initializePage() {
  // Data array with some sample data
  const data = [10, 20, 30, 40, 50];

  // Select the body element and bind data to div elements
  d3.select('body')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    .attr('class', 'data-point')
    .text(d => d)
    .on('mouseover', function() {
      // Change styles on mouseover
      d3.select(this)
        .style('background-color', 'lightblue')
        .style('color', 'black');
    })
    .on('mouseout', function() {
      // Revert styles on mouseout
      d3.select(this)
        .style('background-color', 'white')
        .style('color', 'black');
    });
}

// Call the initialization function when the document is ready
document.addEventListener('DOMContentLoaded', initializePage);
