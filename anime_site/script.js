// For Sidebar 

body = document.querySelector('body')
sidebaropen = document.getElementById('sidebaropen')
sidebar_container = document.getElementById('sidebar_container')
sidebar = document.getElementById('sidebar')
sidebaropen.addEventListener('click',function(){
    sidebar_container.classList.remove('hidden')
    body.classList.add('overflow-hidden')
    
})
sidebarclose = document.getElementById('sidebarclose')
sidebarclose.addEventListener('click',function(){
    sidebar_container.classList.add('hidden')
    // sidebar.setAttribute('h-full max-w-[300px] bg-zinc-500/40 rounded-r-2xl flex flex-col py-8 items-center gap-3')
    body.classList.remove('overflow-hidden')
})


// For Slider

let items = document.querySelectorAll('.item')
let next = document.querySelector('#next')
let prev = document.querySelector('#prev')
let count = items.length
let activeElement = 0
// console.log(items[])


next.onclick = function(){

    items[(activeElement+1)%4].classList.remove('hidden')
    items[(activeElement)%4].classList.add('hidden')
    activeElement++
}

prev.onclick = function(){
    items[(activeElement-1)%4].classList.remove('hidden')
    items[(activeElement)%4].classList.add('hidden')
    console.log(activeElement)
    activeElement--
}

let runslider = setInterval(() => {
        next.click()
    }, 3000);





// next.onclick = function(){
//     activeElement++
//     // if(activeElement >= count){
//     //     activeElement =0
//     // }
//     slider();
// }


// prev.onclick = function(){
//     activeElement--
//     // if(activeElement<0){
//     //     activeElement = 3
//     // }
//     slider();
// }
// console.log('before',activeElement,activeElement-1)

// let runslider = setInterval(() => {
//     next.click()
// }, 5000);
// console.log('after',activeElement,activeElement-1)

// function slider(){
//     items[(activeElement+1)%3].classList.remove('hidden')
//     items[activeElement].classList.add('hidden')
// }


// console.log(items.entries()[1])
// items.forEach((i) => {
//     if(n === 0){
//         items[n].setAttribute('class','item object-cover after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-zinc-800/90 from-25% to-transparent opacity-100 z-10')
//         console.log('item0 visible')
//         ++n;
//     }
//     else{
//         items[n].setAttribute('class','item object-cover after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t from-zinc-800/90 from-25% to-transparent opacity-100 z-10 hidden')
//         ++n;
        
//     }    
// })
// console.log(items[1].getAttribute('class'))
// console.log(items[1].classList.remove('hidden'))
// console.log(items[1].getAttribute('class'))

// function showSlider(){
//     // remove item active old
//     let itemActiveOld=document.querySelector('.hidden');
//     itemActiveOld.classList.add('hidden');   

//     // active new item
//     items[itemActive].classList.remove('hidden');
// }
