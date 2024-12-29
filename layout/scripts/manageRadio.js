let fast_choice = 0;
const buttons = document.querySelectorAll('#fast_choice li');
for (let elem of buttons) {
    elem.children[0].setAttribute('checked', 'false');
};
function changeTotal(button){
    const total = document.getElementById('output_price').children[0];
    const input = document.getElementById('total_textarea').value;
    if (input){
        if (button){
            document.getElementById('total_textarea').value = '';
            total.textContent = fast_choice.toString() + '₽';
        }
        else{
            for (elem of buttons){
                elem.children[0].setAttribute('checked', 'false');
                total.textContent = input + '₽';
            }
        }
    } else {
        total.textContent = fast_choice.toString() + '₽';
    }
};
function activate(){
    const button = document.getElementById('send_btn').children[0];
    button.removeAttribute('disabled')
};
for (let elem of buttons) {
    elem.onclick = () => {
        activate();
        let wasChecked = elem.children[0].getAttribute('checked');
        for (let e of buttons) {
            e.children[0].setAttribute('checked', 'false')
        };
        if (wasChecked=='true'){
            elem.children[0].setAttribute('checked', 'false');
            fast_choice = 0;
        }else{
            elem.children[0].setAttribute('checked', 'true');
            fast_choice = Number(elem.children[0].value)
        };
        changeTotal(true);
    }
}
const adds = document.querySelectorAll('#add_choice li');
for (let elem of adds) {
    elem.children[0].setAttribute('checked', 'false');
};
for (let elem of adds) {
    elem.onclick = () => {
        activate();
        let wasChecked = elem.children[0].getAttribute('checked');
        for (let e of buttons) {
            e.children[0].setAttribute('checked', 'false')
        };
        if (wasChecked=='true'){
            elem.children[0].setAttribute('checked', 'false')
        }else{
            elem.children[0].setAttribute('checked', 'true')
        }
    }
}
function clear(selector){
    elems = document.querySelectorAll(selector);
    for (elem of elems){
        elem.setAttribute('checked', 'false')
    };
}

document.querySelector("#delete_btn").onclick = () => {
    clear('#fast_choice li input[type=radio]');

}


function menuPiece(height,trigger,content,close,checker){
    const container = content.parentElement;
    trigger.onchange = () =>{
        if (checker){
            changeTotal(false)
        }
        if (trigger.value){
            container.style.visibility = "visible";
            container.style.height = height.toString() + 'px';
            content.style.top = '0px';
            content.style.visibility = 'visible';
            activate();
        } else if ((content.style.visibility = "visible")&&(close)){
            content.style.visibility = 'hidden';
            content.style.top = (-1*height).toString() + 'px';
            container.style.height = '0px';
            container.style.visibility = "hidden";            
        }
    }
}
menuPiece(280, document.querySelector("#total_textarea"), document.querySelector("#expand_menu"),false,true);
menuPiece(50, document.querySelector("#comment_textarea"), document.querySelector("#delete_btn"),true,false);
