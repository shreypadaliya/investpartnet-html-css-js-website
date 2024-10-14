
const testimonialData = [
  {
    name: "Hassan Atmeh",
    company: "Repzo",
    image:
      "assets/Check_3_Pcs_Suit_In_Maroon_Wester-CPNM1977R1BA23FL-image1.webp",
    text: "Oasis500 has helped us build a product, go to market, acquire customers and raise funding. A true investment partner.",
  },
  {
    name: "Sarah Johnson",
    company: "TechInnovate",
    image: "assets/IMG_0228_754a69c3-fbcd-41c4-9b39-9191ceb64cf4.webp",
    text: "Working with Oasis500 has been transformative for our startup. Their guidance and support have been invaluable.",
  },
  {
    name: "Ahmed Al-Mansour",
    company: "DataDrive",
    image: "assets/MSU-0006_F.webp",
    text: "Oasis500's network and mentorship program gave us the boost we needed to scale our operations across the MENA region.",
  },
  {
    name: "Laila Hassan",
    company: "IQEZ",
    image: "assets/SageGreenThreePiece_1.webp",
    text: "The resources and connections provided by Oasis500 were instrumental in helping us expand our market reach.",
  },
  {
    name: "Omar Farooq",
    company: "TechVista",
    image: "assets/spotlight-collection-mens-2.webp",
    text: "Oasis500's expertise in the MENA startup ecosystem has been crucial for our growth and success in the region.",
  },
];

let currentTestimonialIndex = 0;

const testimonialImage = document.getElementById(
  "testimonial-slider-image"
);
const testimonialContent = document.getElementById(
  "testimonial-slider-text"
);
const testimonialName = document.getElementById(
  "testimonial-slider-name"
);
const testimonialCompany = document.getElementById(
  "testimonial-slider-company"
);
const testimonialPrevBtn = document.getElementById(
  "testimonial-slider-prev"
);
const testimonialNextBtn = document.getElementById(
  "testimonial-slider-next"
);

function updateTestimonialSlider() {
  const testimonial = testimonialData[currentTestimonialIndex];
  testimonialImage.src = testimonial.image;
  testimonialContent.textContent = testimonial.text;
  testimonialName.textContent = testimonial.name;
  testimonialCompany.textContent = testimonial.company;
}

testimonialPrevBtn.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonialData.length) %
    testimonialData.length;
  updateTestimonialSlider();
});

testimonialNextBtn.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex + 1) % testimonialData.length;
  updateTestimonialSlider();
});

// Initialize the testimonial slider
updateTestimonialSlider();
