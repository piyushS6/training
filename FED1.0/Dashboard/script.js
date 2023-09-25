// sidebar toggle

var sidebarOpen = false;
var sidebar = document.querySelector('.sidebar');
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