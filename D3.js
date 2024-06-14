// U35346496
//  D3.js
// script.js

function initializePage() {
  // Data array with some sample data
  const data = [10, 20, 30, 40, 50];

  // Select the body element and bind data to div elements
  const divs = d3.select("body")
        .selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "datapoint") // Apply class for styling
        .text(d => d); // Display text based on data value

    // Add hover interactivity using D3.js
    divs.on("mouseover", function() {
            // Change background color to a more vibrant shade on mouseover
            d3.select(this).style("background-color", "firebrick");
        })
        .on("mouseout", function() {
            // Revert background color to its original state on mouseout
            d3.select(this).style("background-color", "steelblue");
        });
}

// Call the initializePage function when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    initializePage();
});
