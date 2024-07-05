// Product details
const product_vendor = "Marmeto";
const product_title = "Embrace Sideboard";
const price = 12999.0;
const compare_at_price = 19999.0;
const percentage_off = ((compare_at_price - price) / compare_at_price) * 100;
let color = "";
let size = "";
let quantity = 1;

// Cache DOM elements
const brndName = document.querySelector(".brandName");
const heading = document.querySelector(".heading");
const originalPrice = document.querySelector(".originalPrice");
const cutPrice = document.querySelector(".cutPrice");
const discount = document.querySelector(".discount");
const count = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const boxes = document.querySelectorAll(".box");
const img = document.querySelectorAll(".img");
const sizes = document.querySelectorAll(".size");
const mini = document.querySelectorAll(".mini");
const cart = document.querySelector(".cart");
const msg = document.getElementById("msg");

// Set initial values
count.innerHTML = quantity;
brndName.innerHTML = product_vendor;
heading.innerHTML = product_title;
originalPrice.innerHTML = `$${price}.00`;
cutPrice.innerHTML = `$${compare_at_price}.00`;
discount.innerHTML = `${percentage_off.toFixed(2)}%`;

// Handle quantity update
minus.addEventListener("click", () => {
  if (quantity > 1) {
    quantity--;
    count.innerHTML = quantity;
  }
});

plus.addEventListener("click", () => {
  quantity++;
  count.innerHTML = quantity;
});

// Color mapping
const colorMap = ["Yellowish", "Greenish", "Blueish", "Pinkish"];

// Handle box click
const handleBoxClick = (event, index) => {
  boxes.forEach((box) => box.classList.remove("selected"));
  event.currentTarget.classList.add("selected");
  color = colorMap[index];
  // console.log(color);
};

// Add event listeners for boxes
boxes.forEach((box, index) =>
  box.addEventListener("click", (event) => handleBoxClick(event, index))
);

// Handle image click
const handleIClick = (event) => {
  img.forEach((i) => i.classList.remove("vis"));
  event.currentTarget.classList.add("vis");
};

// Add event listeners for images
img.forEach((i) => i.addEventListener("click", handleIClick));

// Size mapping
const sizeMap = ["Small", "Medium", "Large", "Extra Large", "XXL"];

// Handle size click
const handleSClick = (event, index) => {
  sizes.forEach((s) => s.classList.remove("color"));
  event.currentTarget.classList.add("color");
  size = sizeMap[index];
  // console.log(size);
};

// Add event listeners for sizes
sizes.forEach((s, index) =>
  s.addEventListener("click", (event) => handleSClick(event, index))
);

// Handle mini click
const handleMClick = (event) => {
  mini.forEach((m) => m.classList.remove("bg"));
  event.currentTarget.classList.add("bg");
};

// Add event listeners for mini
mini.forEach((m) => m.addEventListener("click", handleMClick));

// Handle cart click
const handleCartClick = () => {
  if (size && color) {
    msg.style.display = "block";
    msg.innerHTML = `${quantity} Embrace Sideboard with Color ${color} and Size ${size} added to cart`;
  }
};

cart.addEventListener("click", handleCartClick);
