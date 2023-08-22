const observer = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      observer.unobserve(item.target);
      item.target.classList.add("show-scroll-animation");
    } else {
      item.target.classList.remove("show-scroll-animation");
    }
  });
});

const hideElements = document.querySelectorAll(".hide-scroll-animation");
hideElements.forEach((e) => observer.observe(e));
