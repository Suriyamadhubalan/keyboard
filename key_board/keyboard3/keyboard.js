var conditon=true;

var disp = document.getElementById("display")

var temp = 0
function appendToDisplay(value) {
    if (value == "upper") {
        if (temp == 0) {
            return temp = 1
        }
        else {
            return temp = 0
        }
    }
    if (temp == 0) {
        disp.value += value
    }
    else {
        
        disp.value += value.toUpperCase()
    }
}

function del() {
    equation = disp.value
    equation = equation.slice(0, equation.length - 1)
    disp.value = equation
}


function caps(){
    a=document.getElementsByClassName("a")

    if (conditon==true){
        for(i=0; i<a.length; i++){
            a[i].textContent=a[i].textContent.toUpperCase()
        }
        conditon=false
        appendToDisplay("upper")
    }
    else{
        for(i=0; i<a.length; i++){
            a[i].textContent=a[i].textContent.toLowerCase()
        }
        conditon=true
        appendToDisplay("upper")
    }
}

function emoji(){
    let keys= document.getElementsByClassName("first-row")
    let emo= document.getElementsByClassName("e-row")
    let num= document.getElementsByClassName("numbers")

    for(i=0;i<keys.length; i++){
        keys[i].style.display = "none"
    }
    for(i=0; i<emo.length; i++){
        emo[i].style.display= "flex"
    }
    for(i=0; i<num.length; i++){
        num[i].style.display= "none"
    }
}

function back_to_keys(){
    let keys= document.getElementsByClassName("first-row")
    let emo= document.getElementsByClassName("e-row")

    for(i=0;i<keys.length; i++){
        keys[i].style.display = "flex"
    }
    for(i=0; i<emo.length; i++){
        emo[i].style.display= "none"
    }
}

function ABC(){
    let keys= document.getElementsByClassName("first-row")
    let num= document.getElementsByClassName("numbers")

    for(i=0; i<num.length; i++){
        num[i].style.display= "none"
    }
    for(i=0;i<keys.length; i++){
        keys[i].style.display = "flex"
    }
}

function NUM(){
    let keys= document.getElementsByClassName("first-row")
    let num= document.getElementsByClassName("numbers")

    for(i=0;i<keys.length; i++){
        keys[i].style.display = "none"
    }
    for(i=0; i<num.length; i++){
        num[i].style.display= "flex"
    }
}