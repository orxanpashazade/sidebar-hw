let sidebarClosing = document.querySelector(".sidebar-close-content").classList 
let sidebarOpened = document.querySelector(".sidebarOpened").classList 
let toClose = document.querySelector(".toCloseSidebar")
let closeButton = document.querySelector(".closeBtn")
let burgerButton = document.querySelector(".burger-btn")
burgerButton.addEventListener("click",()=>{
    sidebarClosing.add("hidden")
    sidebarOpened.remove("hidden")
})
toClose.addEventListener("click",()=>{
    sidebarOpened.add("hidden")
    sidebarClosing.remove("hidden")
})
closeButton.addEventListener("click", ()=>{
    sidebarOpened.add("hidden")
    sidebarClosing.remove("hidden")
})

