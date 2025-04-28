let products = [
  {
    product_image: "images/airpods.webp",
    product_title: "Sony WH-1000XM5 Noise Cancelling Headphones",
    product_description: "Experience exceptional noise cancellation with Sony’s flagship headphones. Perfect for travel or daily commutes, featuring superior sound quality.",
    product_price: "$449",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Canon EOS R5 Mirrorless Camera",
    product_description: "Capture your creative visions with the Canon EOS R5, a full-frame mirrorless camera boasting 45MP resolution and 8K video recording.",
    product_price: "$3899",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Fujifilm X-T4 Mirrorless Camera",
    product_description: "The X-T4 delivers a superb combination of imaging performance, enhanced 4K video features, and remarkable in-body stabilization.",
    product_price: "$1699",
  },
  {
    product_image: "images/airpods.webp",
    product_title: "Bose QuietComfort 35 II Wireless Headphones",
    product_description: "The Bose QuietComfort 35 II delivers industry-leading noise cancellation technology for a truly immersive sound experience.",
    product_price: "$299",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Panasonic Lumix GH5 Mark II Camera",
    product_description: "Capture stunning 4K video and professional-quality photos with the Panasonic Lumix GH5 Mark II. Perfect for videographers and photographers alike.",
    product_price: "$1399",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Olympus OM-D E-M1 Mark III Camera",
    product_description: "A compact and rugged mirrorless camera offering professional-grade image quality, advanced autofocus, and stunning 4K video.",
    product_price: "$1799",
  },
  {
    product_image: "images/airpods.webp",
    product_title: "Sennheiser Momentum 3 Wireless Headphones",
    product_description: "High-end sound and luxurious design come together in Sennheiser’s Momentum 3 Wireless Headphones, with advanced noise-cancellation and incredible audio fidelity.",
    product_price: "$399",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Leica M10-R Digital Rangefinder Camera",
    product_description: "Unleash the power of Leica’s renowned rangefinder system with the M10-R, offering unmatched image quality and a fully manual shooting experience.",
    product_price: "$8495",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Nikon D850 DSLR Camera",
    product_description: "A high-performance DSLR, Nikon D850 offers a 45.7MP full-frame sensor, 4K UHD video, and 7 fps continuous shooting speed, perfect for any enthusiast.",
    product_price: "$2999",
  },
  {
    product_image: "images/airpods.webp",
    product_title: "JBL Quantum One Gaming Headset",
    product_description: "Enhance your gaming experience with the JBL Quantum One, offering immersive sound, spatial audio, and noise-canceling technology for serious gamers.",
    product_price: "$299",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Sony Alpha a7 III Full-Frame Camera",
    product_description: "The Sony Alpha a7 III offers 4K video recording, a 24.2MP full-frame sensor, and impressive autofocus capabilities, perfect for any level of photography.",
    product_price: "$1999",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Ricoh GR III Digital Compact Camera",
    product_description: "A pocketable compact camera offering outstanding image quality with its 24MP APS-C sensor, perfect for street photography.",
    product_price: "$899",
  },
  {
    product_image: "images/airpods.webp",
    product_title: "Bang & Olufsen Beoplay H95 Headphones",
    product_description: "A premium pair of wireless headphones from Bang & Olufsen, designed for audiophiles with exceptional sound quality and luxurious design.",
    product_price: "$800",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Sigma fp L Mirrorless Camera",
    product_description: "The Sigma fp L is a full-frame mirrorless camera with an impressive 61MP sensor, offering stunning image detail and video versatility.",
    product_price: "$2499",
  },
  {
    product_image: "images/camera.webp",
    product_title: "Panasonic Lumix G85 Mirrorless Camera",
    product_description: "Capture 4K video and beautiful stills with the Panasonic Lumix G85, featuring a 16MP sensor and 5-axis stabilization system.",
    product_price: "$799",
  },
];
let productRow = document.getElementById("productRow");
function renderCards(productsArray) {
  productRow.innerHTML = "";
  productsArray.map((product, i) => {
    productRow.innerHTML +=`
    
     <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
      <div class="card" style="width: 18rem">
        <img src="${product.product_image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${product.product_title}</h5>
          <p class="card-text">
           ${product.product_description}
          </p>
          <p>${product.product_price}<p>
          <a href="detail.html?index=${i}" class="btn btn-primary">See Details</a>
        </div>
      </div>
    </div>

`;
   
  });
}
renderCards(products);
let searchBtn = document.getElementById("searchBtn");
let search = document.getElementById("search");
search.addEventListener("input", () => {
  let searchValue = search.value.toLowerCase();
  let filteredArray = products.filter((pro) =>
    pro.product_title.toLowerCase().includes(searchValue)
  );
  console.log(filteredArray);
  renderCards(filteredArray);
});
