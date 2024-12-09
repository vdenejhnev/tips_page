const imageArray = ['slider1.png','slider2.png','slider3.png','slider4.png']
let index = 0;
for (slider of document.querySelectorAll('.slider')){
    slider.onclick = ()=>{
        index = (index + 1) % imageArray.length;
        slider.children[0].src='src/'+imageArray[index];
        for (dot of slider.parentElement.children[1].children){
            dot.classList.remove('active')
        };
        slider.parentElement.children[1].children[index].classList.add('active');

    }

}