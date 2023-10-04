// Card Data

const cardData = [
    {
      image: "images/001.jpg",
      name: "ELLIOT GLASSES",
      discount_price: "$678.00",
      sizes: ["S", "M", "XL"],
      price: "$754.00",
      other: "Including Lenses"
    },
    {
      image: "images/002.jpg",
      name: "MAXTOR CHAIR",
      discount_price: "$245.00",
      sizes: ["S", "M", "XL"],
      price: "$166.00",
      other: "Including Lenses"
    },
    {
      image: "images/003.jpg",
      name: "MANROAD GLASSES",
      discount_price: "$199.00",
      sizes: ["S", "M", "XL"],
      price: "",
      other: "Including Lenses"
    },
    {
      image: "images/004.jpg",
      name: "ALIEN GLASSES",
      discount_price: "$542.00",
      sizes: ["S", "M", "XL"],
      price: "$356.00",
      other: "Including Lenses"
    },
    {
      image: "images/003.jpg",
      name: "MANROAD GLASSES",
      discount_price: "$199.00",
      sizes: ["S", "M", "XL"],
      price: "",
      other: "Including Lenses"
    },
    {
      image: "images/004.jpg",
      name: "ALIEN GLASSES",
      discount_price: "$542.00",
      sizes: ["S", "M", "XL"],
      price: "$356.00",
      other: "Including Lenses"
    },
    {
      image: "images/001.jpg",
      name: "ELLIOT GLASSES",
      discount_price: "$678.00",
      sizes: ["S", "M", "XL"],
      price: "$754.00",
      other: "Including Lenses"
    },
    {
      image: "images/002.jpg",
      name: "MAXTOR CHAIR",
      discount_price: "$245.00",
      sizes: ["S", "M", "XL"],
      price: "$166.00",
      other: "Including Lenses"
    },
    {
      image: "images/001.jpg",
      name: "ELLIOT GLASSES",
      discount_price: "$678.00",
      sizes: ["S", "M", "XL"],
      price: "$754.00",
      other: "Including Lenses"
    },
    {
      image: "images/002.jpg",
      name: "MAXTOR CHAIR",
      discount_price: "$245.00",
      sizes: ["S", "M", "XL"],
      price: "$166.00",
      other: "Including Lenses"
    },
    {
      image: "images/003.jpg",
      name: "MANROAD GLASSES",
      discount_price: "$199.00",
      sizes: ["S", "M", "XL"],
      price: "",
      other: "Including Lenses"
    },
    {
      image: "images/004.jpg",
      name: "ALIEN GLASSES",
      discount_price: "$542.00",
      sizes: ["S", "M", "XL"],
      price: "$356.00",
      other: "Including Lenses"
    },
]

const postContainer = document.querySelector(".cards");

const postMethods = () => {
  cardData.map((postData) => {
    const postElement = document.createElement('div');
    postElement.classList.add('card');
    postElement.innerHTML = `
      <div class="image" onclick="window.location.href='product-detail.html'">
        <img src="${postData.image}" alt="">
      </div>
      <hr>
      <div class="card-content">
          <p>${postData.name}</p>
          <p>${postData.discount_price}</p>
      </div>
      <div class="card-content">
          <p><span>${postData.sizes[0]}</span><span>${postData.sizes[1]}</span><span>${postData.sizes[2]}</span></p>
          <p>${postData.price}</p>
      </div>
      <p>${postData.other}</p>
    `
    postContainer.appendChild(postElement);
  })
}

postMethods();


// sidebar toggle

var sidebarOpen = false;
var sidebar = document.querySelector(".sidebar");
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}
function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}


// logout popup

var LogoutBtn = document.querySelector(".logout");

var flag = 0;

LogoutBtn.addEventListener("click", function(){
    if(!flag){
        document.body.classList.add("logoutpopup-active");
        flag = 1;
    }else{
        document.body.classList.remove("logoutpopup-active");
        flag = 0;
    }
});


// scroll to top

function scrollToTop(){
  window.scrollTo(0, 0);
}


































// sidebar toggle

var sidebarOpen = false;
var sidebar = document.getElementsByClassName("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}