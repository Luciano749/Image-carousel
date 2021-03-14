let imagesContainer = document.getElementById("images-container");

let index = 0;

window.onload = () => {
  imagesContainer.style.marginLeft = `${index}%`;
};

const next = () => {
  index -= 100;

  if (index < -200) index = 0;

  imagesContainer.style.marginLeft = `${index}%`;
};

const previous = () => {
  index += 100;

  if (index > 0) index = -200;

  imagesContainer.style.marginLeft = `${index}%`;
};
