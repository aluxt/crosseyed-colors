window.onload = function() {
    const block1 = document.getElementById('block1');
    const block2 = document.getElementById('block2');
    const colorInput1 = document.getElementById('color1');
    const colorInput2 = document.getElementById('color2');
    const imageSizeInput = document.getElementById('imageSize');
    const gapInput = document.getElementById('gap');
    const container = document.querySelector('.container');

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function updateBlockColor(block, input, color) {
        block.style.backgroundColor = color;
        input.value = color;
    }

    updateBlockColor(block1, colorInput1, getRandomColor());
    updateBlockColor(block2, colorInput2, getRandomColor());

    const image1 = document.createElement('img');
    image1.src = 'image.png';
    block1.appendChild(image1);

    const image2 = document.createElement('img');
    image2.src = 'image.png';
    block2.appendChild(image2);

    document.getElementById('randomize1').onclick = () => updateBlockColor(block1, colorInput1, getRandomColor());
    document.getElementById('randomize2').onclick = () => updateBlockColor(block2, colorInput2, getRandomColor());
    document.getElementById('randomizeAll').onclick = () => {
        updateBlockColor(block1, colorInput1, getRandomColor());
        updateBlockColor(block2, colorInput2, getRandomColor());
    };

    colorInput1.addEventListener('input', () => updateBlockColor(block1, colorInput1, colorInput1.value));
    colorInput2.addEventListener('input', () => updateBlockColor(block2, colorInput2, colorInput2.value));

    imageSizeInput.addEventListener('input', () => {
        image1.style.width = imageSizeInput.value + '%';
        image2.style.width = imageSizeInput.value + '%';
    });

    gapInput.addEventListener('input', () => {
        container.style.gap = gapInput.value + '%';
    });

    document.getElementById('resetImageSize').onclick = () => {
        imageSizeInput.value = 50;
        image1.style.width = '50%';
        image2.style.width = '50%';
    };

    document.getElementById('resetGap').onclick = () => {
        gapInput.value = 15;
        container.style.gap = '15%';
    };
};
