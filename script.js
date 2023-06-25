var tabLinks=document.getElementsByClassName(`tab-links`)
var tabContents=document.getElementsByClassName(`tab-contents`)
function openTab(tabName){
    for (tabLinks of tabLinks){
        tabLinks.classList.remove(`active-links`)
    }
    for (tabContents of tabContents){
        tabContents.classList.remove(`active-tab`)
    }
    event.currentTarget.classList.add(`active-link`)
    document.getElementById(tabName).classList.add(`active-tab`)
}
var sideMeu=document.getElementById(`sideMenu`)
function  openMenu(){
    sideMeu.style.right=`0`
}
function closeMenu(){
    sideMeu.style.right=`-200px`
}
