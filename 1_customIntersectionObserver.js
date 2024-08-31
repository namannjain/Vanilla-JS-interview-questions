class MyIntersectionObserver{
  constructor() {
    this.entries = [];

    this.handleScroll = () => {
      
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  observe(element) {
    this.entries.push({
      isIntersecting: false,
      target: element,
      topOffset: element.getBoundingClientRect().top,
      bottomOffset: element.getBoundingClientRect().bottom
    })
  }
}