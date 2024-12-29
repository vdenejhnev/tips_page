const GOOD_WORDS = ['Плохо', 'Приемлемо', 'Нормально', 'Здорово', 'Великолепно']


const stars = document.querySelectorAll("i.fa-solid.fa-star")
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {    
        let i = 0;
        stars.forEach((star, index2) => {
            if (index1 >= index2){
                star.children[0].setAttribute('checked','true');
                i++
            }else{
                star.children[0].setAttribute('checked','false');
            }
        });
        document.getElementById("quality_of_work__text").textContent=GOOD_WORDS[i-1]
        document.getElementById('star_box__container').style.border = 'solid 1px var(--main-color)'
    });
});