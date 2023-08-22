import elements from "./helper/elements";



const Scroll = {
  options: {
    duration: 0,   // Default duration
    offset: 0,     // Default offset
    delay: 0,      // Default delay
  },

  config(options) {
    this.options = { ...this.options, ...options };
    this.initScrollAnimations();
  },

  initScrollAnimations() {
    elements.forEach((element) => {
      const delayAttribute = parseInt(element.getAttribute("data-scroll-delay"));
      const offsetAttribute = parseInt(element.getAttribute("data-scroll-offset"));
      const delay = isNaN(delayAttribute) ? this.options.delay : delayAttribute;
      const offset = isNaN(offsetAttribute) ? this.options.offset : offsetAttribute;

      this.applyScrollAnimation(element, delay, offset);
    });
  },

  applyScrollAnimation(element, delay, offset) {
    const observer = new IntersectionObserver((items) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          setTimeout(() => {
            observer.unobserve(item.target);
            item.target.classList.add("show-scroll-animation");
          }, delay);
        } else {
          item.target.classList.remove("show-scroll-animation");
        }
      });
    }, {
      rootMargin: `-${offset}px 0px 0px 0px`, // Apply offset to the top intersection point
    });

    observer.observe(element);
  },
};

Scroll.config({
  delay: 0,   // Set the default animation delay (in milliseconds)
  offset: 0,  // Set the default intersection observer offset (in pixels)
});

window.Scroll = Scroll;
