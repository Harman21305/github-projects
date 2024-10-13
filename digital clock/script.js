const clock = document.querySelector('#clock')

const color = ['white','black']

// color.forEach()
let n=0

setInterval(function() {
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
    if (n===2){
        n=0
    }
    clock.style.color = color[n]
    clock.style.backgroundColor = color[1-n]
    // console.log(n,1-n)
    n++
    
}, 1000)