let nextBtn3 = document.querySelector('.slider3 .next3') 
let prevBtn3 = document.querySelector('.slider3 .prev3')

let slider3 = document.querySelector('.slider3')
let sliderList3 = slider3.querySelector('.list3')
let thumbnail3 = document.querySelector('.slider3 .thumbnail3')
let thumbnailItems3 = thumbnail3.querySelectorAll('.item')

thumbnail3.appendChild(thumbnailItems3[0])

// Function for next button 
nextBtn3.onclick = function() {
    moveSlider3('next3')
}

// Function for prev button 
prevBtn3.onclick = function() {
    moveSlider3('prev3')
}

function moveSlider3(direction) {
    let sliderItems3 = sliderList3.querySelectorAll('.item')
    let thumbnailItems3 = document.querySelectorAll('.thumbnail3 .item')
    
    if(direction === 'next3'){
        sliderList3.appendChild(sliderItems3[0])
        thumbnail3.appendChild(thumbnailItems3[0])
        slider3.classList.add('next3')
    } else {
        sliderList3.prepend(sliderItems3[sliderItems3.length - 1])
        thumbnail3.prepend(thumbnailItems3[thumbnailItems3.length - 1])
        slider3.classList.add('prev3')
    }

    slider3.addEventListener('animationend', function() {
        if(direction === 'next3'){
            slider3.classList.remove('next3')
        } else {
            slider3.classList.remove('prev3')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



