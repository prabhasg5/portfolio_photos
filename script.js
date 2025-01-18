// Select the name element and the header
const nameElement = document.getElementById("name");
const header = document.querySelector(".header");
const gallerySection = document.getElementById("gallery");

// Get the height of the header
const headerHeight = header.offsetHeight;

// Listen to the scroll event
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Get the current scroll position

  // Before reaching the header, the name stays centered vertically
  if (scrollY < nameElement.offsetTop) {
    nameElement.style.position = "absolute";
    nameElement.style.top = "50%";
    nameElement.style.left = "2rem"; // Left-aligned
    nameElement.style.transform = "translateY(-50%)"; // Center vertically
  } 

  // After reaching the header, the name should become fixed inside the header
  if (scrollY >= nameElement.offsetTop - headerHeight && scrollY < gallerySection.offsetTop) {
    nameElement.style.position = "fixed";
    nameElement.style.top = `${headerHeight}px`; // Position it just below the header
    nameElement.style.left = "2rem"; // Keep it left-aligned
    nameElement.style.transform = "none"; // No transform needed for fixed positioning
  }

  // When the name is inside the gallery section, keep it fixed at the top
  if (scrollY >= gallerySection.offsetTop - headerHeight) {
    nameElement.style.position = "fixed";
    nameElement.style.top = "0"; // Keep it at the top of the page inside the header
    nameElement.style.left = "2rem"; // Left-aligned
    nameElement.style.transform = "none"; // No transform for fixed positioning
  }
});