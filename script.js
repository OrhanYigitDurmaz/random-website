document.addEventListener('DOMContentLoaded', function() {
    // Array of fonts and colors
    const fonts = ['Arial, sans-serif', 'Verdana, Geneva, sans-serif', 'Georgia, serif', 'Impact, Charcoal, sans-serif'];
    const colors = ['#FF6347', '#4682B4', '#2E8B57', '#BA55D3', '#FFD700', '#FFA500'];

    // Selecting elements to change
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    // Randomly select font and color
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Apply random font and color
    title.style.fontFamily = randomFont;
    description.style.color = randomColor;

    // Selecting body to change background color
    const body = document.body;
    const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomBackgroundColor;
});
