window.onload = () => {
  const skillsList = document.querySelector(".skills__list");
  skillsList.classList.add("show");

  const skillItems = document.querySelectorAll(".skills__item");

  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 300);
  });
};
