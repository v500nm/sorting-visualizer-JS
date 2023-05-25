console.log("inside bubble sort");
const bubblesort = document.getElementById("bubblesort");

async function bubble(){
    console.log("Inside bubble");
    const ele = document.querySelectorAll(".bar");
    console.log(ele.length)
    ele[0].style.background = "green";
    for(let i=0; i<ele.length-1; i++){
        for(let j=0; j<ele.length-i-1; j++){
            ele[j].style.background = "blue";
            ele[j+1].style.background = "blue";
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                await waitForm(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = "red";
            ele[j+1].style.background = "red";
        }
        ele[ele.length-1-i].style.background = "green";
    }
    ele[0].style.background = "green";
}

bubblesort.addEventListener("click", async ()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await bubble();
    enableSizeSlider();
    enableSortingBtn();
    enableNewArray();
})