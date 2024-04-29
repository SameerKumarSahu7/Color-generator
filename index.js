function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.addEventListener('DOMContentLoaded', () => {
    const colorContainer = document.querySelector('.flex.items-center');
    const generateBtn = document.getElementById('generate-btn');

    generateBtn.addEventListener('click', () => {
        const colors = [];
        for (let i = 0; i < 5; i++) {
            let color = generateRandomColor();
            while (colors.includes(color)) {
                color = generateRandomColor();
            }
            colors.push(color);
        }

        colorContainer.innerHTML = '';
        colors.forEach((color, index) => {
            const swatch = document.createElement('div');
            swatch.className = `w-44 h-56 bg-color-${index + 1} m-2`;
            swatch.style.backgroundColor = color;
            colorContainer.appendChild(swatch);

            document.styleSheets[0].addRule(`.color-${index + 1}`, `background-color: ${color}`);
        });
    });

    generateBtn.click();
});
