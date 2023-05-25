console.log("inside quick sort");

async function getPivot(ele, l, r){
    let pivot = l;
    let i = l+1;
    let j = r;
    do {
        while(parseInt(ele[i].style.height) <= parseInt(ele[pivot].style.height)){
            console.log("parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)")
            await waitForm(delay);
            ele[i].style.background = "yellow";
            i++;
        }
        while(parseInt(ele[j].style.height) > parseInt(ele[pivot].style.height)){
            console.log("parseInt(ele[j].style.height) > parseInt(ele[pivot].style.height)")
            await waitForm(delay);
            ele[j].style.background = "yellow";
            j--;
        }
        if(i<j){
            ele[i].style.background = "blue";
            ele[j].style.background = "blue";
            await waitForm(delay);
            swap(ele[i],ele[j]);
            ele[i].style.background = "yellow";
            ele[j].style.background = "yellow";
        }
    } while (i<j);
    swap(ele[l], ele[j]);
    ele[j].style.background = "green";
    return j
}

async function quick(ele, l, r){
    console.log(`l=${l} r=${r}`)
    if(l<r){
        let pivot = await getPivot(ele, l, r);
        await quick(ele, l, pivot-1);
        await quick(ele, pivot+1, r);
    }else{
        if(l>=0 && r>=0 && l<ele.length-1 && r<ele.length-1){
            ele[r].style.background = "green";
            ele[l].style.background = "green";
        }
    }
}

const quicksort = document.getElementById("quicksort");
quicksort.addEventListener("click", async ()=>{
    const ele = document.querySelectorAll(".bar");
    let l=0;
    let r=ele.length-1;
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await quick(ele, l, r);
    // ele[ele.length-1].style.color = green;
    enableSizeSlider();
    enableSortingBtn();
    enableNewArray();
})