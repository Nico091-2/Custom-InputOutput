// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");

    // Add click event
    button.addEventListener("click", function () {
        alert("Button clicked!");
    });
});
