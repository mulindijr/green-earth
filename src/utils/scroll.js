export const smoothScroll = (target) => {
  const element = document.querySelector(target);
  const navbar = document.querySelector('nav');

  const offset = navbar ? navbar.offsetHeight - 10 : 0;

  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
  }
};