document.querySelectorAll('.zoom-container').forEach(zoomContainer => {
    const img = zoomContainer.querySelector('.zoom-img');

    const lens = document.createElement('div');
    lens.classList.add('zoom-lens');
    zoomContainer.appendChild(lens);

    lens.style.backgroundImage = `url('${img.src}')`;

    img.addEventListener('mousemove', moveLens);

    function moveLens(e) {
        const pos = getCursorPos(e);
        let x = pos.x - lens.offsetWidth / 2;
        let y = pos.y - lens.offsetHeight / 2;

        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }

        lens.style.left = `${x}px`;
        lens.style.top = `${y}px`;

        const cx = lens.offsetWidth / img.width;
        const cy = lens.offsetHeight / img.height;

        lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
    }

    function getCursorPos(e) {
        const rect = img.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
});