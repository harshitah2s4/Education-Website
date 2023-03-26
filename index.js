burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
rightNav=document.querySelector('.rightNav')
navlist=document.querySelector('.nav-list')
logo=document.querySelector('.logo')

burger.addEventListener('click',()=>{

rightNav.classList.toggle('visibility');
navlist.classList.toggle('visibility');
navbar.classList.toggle('h-nav');
logo.classList.toggle('visibility');
})