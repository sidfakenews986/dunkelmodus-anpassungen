document.addEventListener('DOMContentLoaded', function () {
    // Logic for changing colors and styles
    function changeStyles(color) {
        document.body.style.backgroundColor = color;
    }

    // Default color constant
    const DEFAULT_COLOR = '#d3d3d3';

    // Event listener for input to change styles in real-time
    const colorInput = document.getElementById('colorInput');
    colorInput.value = DEFAULT_COLOR; // Set default color to light gray
    colorInput.addEventListener('input', function() {
        changeStyles(colorInput.value);
    });
});