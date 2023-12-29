const container = document.getElementById('gallery');

const imgGallery = () => {
  for (let i = 0; i < 30; i++) {
    const imageUrl = `https://source.unsplash.com/random/350x200?${i}`;

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    container.appendChild(imgElement);
  }
};
imgGallery();
