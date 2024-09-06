document.addEventListener('DOMContentLoaded', () => {
  const items = [
    { id: 1, image: 'https://placehold.co/50x50' },
    { id: 2, image: 'https://placehold.co/50x50' },
    { id: 3, image: 'https://placehold.co/50x50' },
    { id: 4, image: 'https://placehold.co/50x50' },
    { id: 5, image: 'https://placehold.co/50x50' },
    { id: 6, image: 'https://placehold.co/50x50' },
    { id: 7, image: 'https://placehold.co/50x50' },
    { id: 8, image: 'https://placehold.co/50x50' },
    { id: 9, image: 'https://placehold.co/50x50' },
    { id: 10, image: 'https://placehold.co/50x50' },
    { id: 11, image: 'https://placehold.co/50x50' },
    { id: 12, image: 'https://placehold.co/50x50' },
    { id: 13, image: 'https://placehold.co/50x50' },
    { id: 14, image: 'https://placehold.co/50x50' },
    { id: 15, image: 'https://placehold.co/50x50' },
    { id: 16, image: 'https://placehold.co/50x50' },
    { id: 17, image: 'https://placehold.co/50x50' },
    { id: 18, image: 'https://placehold.co/50x50' },
  ];

  const carrouselLine = document.getElementById('carrousel-line');
  const carrouselLineInverted = document.getElementById('carrousel-line-inverted');

  // Function to create an item element
  const createItemElement = (item) => {
    const div = document.createElement('div');
    div.classList.add('app-icon-img-container');
    const img = document.createElement('img');
    img.classList.add('app-icon-img');
    img.src = item.image;
    div.appendChild(img);
    return div;
  };

  // Function to create an inverted item element
  const createInvertedItemElement = (item) => {
    const div = document.createElement('div');
    div.classList.add('app-icon-img-container-inverted');
    const img = document.createElement('img');
    img.classList.add('app-icon-img');
    img.src = item.image;
    div.appendChild(img);
    return div;
  };

  // Add items and their duplicates to the carrousel line
  items.forEach(item => {
    carrouselLine.appendChild(createItemElement(item));
  });
  items.forEach(item => {
    carrouselLine.appendChild(createItemElement(item));
  });

  // Add items and their duplicates to the inverted carrousel line
  items.forEach(item => {
    carrouselLineInverted.appendChild(createInvertedItemElement(item));
  });
  items.forEach(item => {
    carrouselLineInverted.appendChild(createInvertedItemElement(item));
  });
});
