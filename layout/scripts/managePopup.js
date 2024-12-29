const IDS = ['additional_details_bouquet', 'additional_details_sweet', 'additional_details_taxi', 'additional_details_dinner'];


function clicker(e,i){
    e.onclick = ()=>{
        document.getElementById(IDS[i]).classList.add('visible');
    }
};

let counter = 0;
for (i=0;i<4;i++){
    elem = document.querySelectorAll('#add_choice .option')[i].children[2].children[0];
    clicker(elem,i);
};



for (elem of document.getElementsByClassName('close_popup')){
    elem.onclick = ()=>{
        for (t of document.querySelectorAll('.popup')){
            t.classList.remove("visible");
        }
    }
};

document.getElementById('close_fail_popup').onclick = ()=>{document.getElementById('fail').classList.remove('visible')};
document.getElementById('return').onclick = ()=>{document.getElementById('success').classList.remove('visible')};
document.getElementById('send_more').onclick = ()=>{document.getElementById('success').classList.remove('visible')};