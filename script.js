var tabLinks=document.getElementsByClassName(`tab-links`)
var tabContents=document.getElementsByClassName(`tab-contents`)
function openTab(tabName){
    for (tabLink of tabLinks){
        tabLink.classList.remove(`active-links`)
    }
    for (tabContent of tabContents){
        tabContent.classList.remove(`active-tab`)
    }
    event.currentTarget.classList.add(`active-link`)
    document.getElementById(tabname).classList.add(`active-tab`)
}
var sideMeu=document.getElementById(`sidemenu`)
function  openMenu(){
    sideMeu.style.right=`0`
}
function closeMenu(){
    sideMeu.style.right=`-200px`
}
