const tablinks = document.getElementsByClassName("tab-link");
const tabContent = document.getElementsByClassName("tab-content")

function openTab(tabName){
    for(links of tablinks){
        links.classList.remove("active")
    }

    for(tab of tabContent){
        tab.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active")
    document.getElementById(tabName).classList.add("active-content")
}