const btns = document.getElementsByTagName('button'),
    wrapper = document.getElementsByClassName('wrapper')[0],
    x = document.getElementsByTagName('span')[0];
function load() {
    wrapper.style.display = "none";
}
load();
btns[0].addEventListener('click',()=> {
    wrapper.style.display = "block";
})
x.addEventListener('click',()=> {
    wrapper.style.display = "none";
})