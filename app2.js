let nextBtn2 = document.querySelector('.slider2 .next2')
let prevBtn2 = document.querySelector('.slider2 .prev2')

let slider2 = document.querySelector('.slider2')
let sliderList2 = slider2.querySelector('.slider2 .list2')
let thumbnail2 = document.querySelector('.slider2 .thumbnail2')
let thumbnailItems2 = thumbnail2.querySelectorAll('.item')

thumbnail2.appendChild(thumbnailItems2[0])

// Function for next button 
nextBtn2.onclick = function() {
    moveSlider2('next2')
}

// Function for prev button 
prevBtn2.onclick = function() {
    moveSlider2('prev2')
}

function moveSlider2(direction) {
    let sliderItems2 = sliderList2.querySelectorAll('.item')
    let thumbnailItems2 = document.querySelectorAll('.thumbnail2 .item')
    
    if(direction === 'next2'){
        sliderList2.appendChild(sliderItems2[0])
        thumbnail2.appendChild(thumbnailItems2[0])
        slider2.classList.add('next2')
    } else {
        sliderList2.prepend(sliderItems2[sliderItems2.length - 1])
        thumbnail2.prepend(thumbnailItems2[thumbnailItems2.length - 1])
        slider2.classList.add('prev2')
    }

    slider2.addEventListener('animationend', function() {
        if(direction === 'next2'){
            slider2.classList.remove('next2')
        } else {
            slider2.classList.remove('prev2')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



