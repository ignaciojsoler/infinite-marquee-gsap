const marquee = document.querySelector(".marquee");
const marqueeElementsQuantity = 7;
const marqueeText = "THIS IS AN EXAMPLE TEXT";
const gap = 24; //Container's gap / 2
let paragraphsWidth = 0;

// Create marquee elements
for (let i = 0; i < marqueeElementsQuantity; i++) {
    const paragraph = document.createElement("p");
    paragraph.textContent = marqueeText;
    paragraph.classList.add("marquee-children");
    marquee.appendChild(paragraph);
    paragraphsWidth += paragraph.offsetWidth;
}

// Calculate marquee width and set animation
const marqueeWidth = marquee.offsetWidth;
const duration = 4;
const distance = -((marqueeWidth + gap) / marqueeElementsQuantity);

const scrollTL = gsap.timeline({
  repeat: -1,
  defaults: { ease: "none" }
});

scrollTL.to(marquee, { x: distance, duration });

// Adjust animation duration based on content length
const contentLength = paragraphsWidth + (gap * (marqueeElementsQuantity - 1));
const contentDuration = contentLength / marqueeWidth * duration;
scrollTL.duration(contentDuration);
