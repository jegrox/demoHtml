document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('on-click-image');
    const originalSrc = 'pexels-luis-gomes-166706-546819.jpg';
    const newSrc = 'pexels-pixabay-414860.jpg';
    var currentSrc = originalSrc;

    image.onclick = () => {
        if (currentSrc === originalSrc) {
            currentSrc = newSrc;
        } else {
            currentSrc = originalSrc;
        }
        image.src = currentSrc;
        console.log('Image clicked');
    };
});