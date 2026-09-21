// Keep anchor destinations below the navigation, including when its links wrap.
const navigationHeader = document.querySelector('header');
const updateNavigationHeight = () => {
  document.documentElement.style.setProperty('--navigation-height', `${navigationHeader.getBoundingClientRect().height}px`);
};
updateNavigationHeight();
new ResizeObserver(updateNavigationHeight).observe(navigationHeader);
