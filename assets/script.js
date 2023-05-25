const container = document.querySelector(".text-container");
const paragraph = document.querySelector("p");
const btn = document.querySelector("button");
const toogleText = document.querySelector("span");

const onChange = () => {
  if (btn.innerText === "Learn more") {
    btn.innerText = "See less";
    paragraph.classList.add("animation");
    toogleText.style.display = "block";
  } else {
    btn.innerText = "Learn more";
    paragraph.classList.add("animation");
    toogleText.style.display = "none";
  }
};

btn.addEventListener("click", onChange);

container.addEventListener("animationend", () => {
  paragraph.classList.remove("animation");
});

/* let index = 0;

const texts = [
  " Make a statement with bold prints and vibrant colors that brighten up any outfit. ",
  " Accessorize for that extra pop of style and to add your own personal touch to any ensemble. ",
  " Step out of your comfort zone and try something new in fashion to create a unique look. ",
  " Invest in timeless pieces that will never go out of style and can be worn season after season.",
];

btn.addEventListener("click", () => {
  paragraph.innerHTML = texts[index];
  index = index === texts.length - 1 ? 0 : index + 1;
  paragraph.classList.add("animation");
});

container.addEventListener("animationend", () => {
  paragraph.classList.remove("animation");
}); */

/* btn.addEventListener("click", () => {
  paragraph.innerHTML = texts[index];
  if (index < texts.length - 1) {
    index++;
  } else {
    index = 0;
  }
}); */
