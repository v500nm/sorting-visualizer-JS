console.log("inside insetion sort");

async function insertion(){
    const ele = document.querySelectorAll(".bar");
    ele[0].style.background = "green";
    for(let i=1; i<ele.length; i++){
        j = i-1;
        let key = ele[i].style.height;
        ele[i].style.color = "blue";
        await waitForm(delay);
        while(j>=0 && parseInt(ele[j].style.height)>parseInt(key)){
            ele[j].style.background = "blue";
            ele[j+1].style.height = ele[j].style.height;
            await waitForm(delay);
            j--;
            for(let k=i; k>=0; k--){
                ele[k].style.background = "green";
            }
        }
        console.log(j);
        ele[j+1].style.height = key;
        ele[i].style.background = "green";
    }
}

const insertionsort = document.getElementById("insertionsort");
insertionsort.addEventListener("click", async ()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableSizeSlider();
    enableSortingBtn();
    enableNewArray();
})