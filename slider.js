const slider_1 = [
    { image: './images/slider_1/wooter.svg' },
    { image: './images/slider_1/smartBar.svg' },
    { image: './images/slider_1/cabify.svg' },
    { image: './images/slider_1/kari.svg' },
    { image: './images/slider_1/uralAirlines.svg' },
];
const sliderConstructor = (place, data) => {
    document.querySelector(place).innerHTML = '';
    const slider = document.createElement('div');
    slider.setAttribute('class', 'slider');
    data.forEach(item => {
        const sliderItem = document.createElement('div');
        sliderItem.setAttribute('class', 'slider-item');
        sliderItem.innerHTML = `
                ${item.image ? `<div class='image'>
                    <img src='${item.image}'>
                </div>`: ''}
                ${item.title ? `<h3 class='title'>${item.title}</h3>` : ''}
                ${item.btn ? `<button class='start-btn'>${item.btn}</button>` : ''}
        `
        slider.appendChild(sliderItem);
    });
    document.querySelector(place).appendChild(slider);
};

sliderConstructor('.logoes>.layout', slider_1);

const slideNext = (place, data) => {
    data = [...data];
    data.unshift(data.pop());
    sliderConstructor(place, data);
};
