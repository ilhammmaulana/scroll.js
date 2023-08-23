const { CleanPlugin } = require("webpack");

module.exports = () => {
  const animateElements = document.querySelectorAll("[data-scroll-animation]");
  return animateElements;
};
