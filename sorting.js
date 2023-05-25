let width = screen.width;
console.log(width);
if(width < 500){
    let sizeinput = document.getElementById("size-input");
    sizeinput.max="100";
}
function swap(el1, el2){
    let temp=el1.style.height;
    el1.style.height=el2.style.height;
    el2.style.height=temp;
}

function disableSortingBtn(){
    console.log("disabling");
    document.getElementById("bubblesort").disabled=true;
    document.getElementById("insertionsort").disabled=true;
    document.getElementById("mergesort").disabled=true;
    document.getElementById("quicksort").disabled=true;
    document.getElementById("selectionsort").disabled=true;
}
function enableSortingBtn(){
    console.log("enabling");
    document.getElementById("bubblesort").disabled=false;
    document.getElementById("insertionsort").disabled=false;
    document.getElementById("mergesort").disabled=false;
    document.getElementById("quicksort").disabled=false;
    document.getElementById("selectionsort").disabled=false;
}
function disableSizeSlider(){
    console.log("disabling size slider");
    document.getElementById("size-input").disabled=true;
}
function enableSizeSlider(){
    console.log("enabling size slider");
    document.getElementById("size-input").disabled=false;
}
function disableNewArray(){
    console.log("disabling NewArray");
    document.getElementById("new-array").disabled=true;
}
function enableNewArray(){
    console.log("enabling NewArray");
    document.getElementById("new-array").disabled=false;
}
// disableSortingBtn();
console.log("inside sorting.js");

function waitForm(milisec){
    return new Promise(resolve => {
        setTimeout(()=>{resolve()}, milisec);
    })
}

let arraysize = document.getElementById("size-input");
arraysize.addEventListener("input",()=>{
    console.log(arraysize.ariaValueMax, typeof(arraysize.value));
    createNewArray(parseInt(arraysize.value));
})

let delay = 100;
let speed = document.getElementById("speed-input");
speed.addEventListener("input",()=>{
    console.log(arraysize.ariaValueMax, typeof(arraysize.value));
    delay = 100 - (parseInt(speed.value));
})

let array = [];
let bars = document.getElementById("bars");
createNewArray();
function createNewArray(noOfBars = 60){
    deleteChild();
    array = [];
    for(let i=0; i<noOfBars; i++){
        array.push(Math.floor(Math.random()*225)+1);
    }
    console.log(array);
    for(let i=0; i<noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteChild(){
    bars.innerHTML="";
}

const newArray = document.getElementById("new-array");
newArray.addEventListener("click",()=>{
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraysize.value);
})

