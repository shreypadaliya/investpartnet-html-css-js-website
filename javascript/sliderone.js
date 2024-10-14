
const contents = [
  {
    heading: "Who We Are?",
    paragraph:
      "A pre-seed and seed fund manager with an acceleration arm that offers growth support services, that invest in high-growth Information & Communication Technologies & creatively designed product startups at their early stages, with the aim of advancing the entrepreneurial ecosystem in Jordan and the MENA region.",
  },
  {
    heading: "Our Mission",
    paragraph:
      "To empower innovative startups and foster technological advancement in the MENA region, driving economic growth and creating opportunities for talented entrepreneurs.become the leading catalyst for technological innovation advancing the entrepreneurial ecosystem in Jordan",
  },
  {
    heading: "Our Vision",
    paragraph:
      "To become the leading catalyst for technological innovation and entrepreneurial success in Jordan and the broader MENA region, shaping a vibrant and sustainable startup ecosystem fund manager with an acceleration arm that offers growth support services.startups and foster technological advancement in the MENA region,",
  },
];

let currentIndex = 0;
const headingElement = document.getElementById("slider-heading");
const paragraphElement = document.getElementById("slider-paragraph");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateContent() {
  headingElement.textContent = contents[currentIndex].heading;
  paragraphElement.textContent = contents[currentIndex].paragraph;
}

prevBtn.addEventListener("click", () => {
  console.log("hjhj");
  currentIndex = (currentIndex - 1 + contents.length) % contents.length;
  updateContent();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % contents.length;
  updateContent();
});
