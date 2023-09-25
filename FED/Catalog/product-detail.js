// Card data for images

const imageData = [
    {
        source: "images/001.jpg"
    },
    {
        source: "images/001.jpg"
    },
    {
        source: "images/002.jpg"
    },
    {
        source: "images/003.jpg"
    },
    {
        source: "images/004.jpg"
    },
    {
        source: "images/002.jpg"
    },
    {
        source: "images/003.jpg"
    },
]


const imageContainer = document.querySelector(".left-bottom");

const imageMethods = () => {
    imageData.map((image) => {
        // const imageElement = document.createElement('div');
        // imageElement.classList.add('left');
        image.innerHTML = `
            <img src="${image.source}" alt="">
        `
        imageContainer.appendChild(imageElement);
    })
}

// imageMethods();



// Display Content

function showInfo() {
    document.querySelector('.displayContent').innerHTML = `
                            <p>Lorem ipsum dolor sit amet.</p>
                            <h4>Euismod</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                            <h4>Porta</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            <h4>Qui elusmod</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            `;
    
    document.querySelector('.info').style.borderBottom = "2px solid #008CF7";
}

function showDes() {
    document.querySelector('.displayContent').innerHTML = `
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Asperiores molestias possimus voluptas ullam, accusamus 
                            voluptates pariatur, fuga enim harum accusantium laborum 
                            dolorem! Laboriosam laborum doloremque error animi eveniet 
                            facilis repellat?</p>
    `;
    document.querySelector('.des').style.borderBottom = "2px solid #008CF7";
}


// about seller popup

var openPopupBtn = document.querySelector(".aboutSeller");
var closePopupBtn = document.querySelector(".popup-close-btn");

openPopupBtn.addEventListener("click", function() {
    document.body.classList.add("popup-active");
});

closePopupBtn.addEventListener("click", function(){
    document.body.classList.remove("popup-active");
})


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