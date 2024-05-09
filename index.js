
function generateRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.addEventListener('DOMContentLoaded', () => {
    const colorContainer = document.querySelector('.color-container');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        const colors = [];
        const colorCodes = [];
        for (let i = 0; i < 16; i++) { 
            let color = generateRandomColor();
            while (colors.includes(color)) {
                color = generateRandomColor();
            }
            colors.push(color);
            colorCodes.push(color);
        }

        colorContainer.innerHTML = '';
        colorCodes.forEach((color, index) => {
            const swatch = document.createElement('div');
            swatch.className = `flex flex-col items-center justify-center w-24 h-24 rounded-lg border-4 border-gray-200 cursor-pointer mr-4 mb-4`;
            swatch.style.backgroundColor = color;
            swatch.addEventListener('click', () => {
                navigator.clipboard.writeText(color);
                alert(`Color ${color} copied to clipboard!`);
            });

            const colorCode = document.createElement('p');
            colorCode.textContent = color;
            colorCode.className = "text-sm text-gray-700";

            swatch.appendChild(colorCode);
            colorContainer.appendChild(swatch);
        });
    });

    generateBtn.click();
});


