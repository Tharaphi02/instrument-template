const toggle = document.querySelector('.toggle');
const nav = document.querySelector('header nav')

toggle.onclick = () => {
    nav.classList.toggle('active');
}

const header = document.querySelector('header')

window.onscroll = () => {
    if(window.scrollY > 90) {
        header.classList.add('bg')
    } else{
        header.classList.remove('bg')
    }
}

