const images = ['0.jpg', '1.jpg', '2.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 길이만큼 수를 반환
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
