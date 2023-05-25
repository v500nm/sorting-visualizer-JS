console.log("inside merge sort");

async function merge(ele, low, mid, high){
    const n1=mid-low+1;
    const n2=high-mid;
    let left = new Array(n1);
    let right = new Array(n2);
    for(let i=0; i<n1; i++){
        await waitForm(delay);
        ele[low+i].style.background = "yellow";
        left[i] = ele[low+i].style.height;
        // console.log("at "+low+i);
    }
    for(let i=0; i<n2; i++){
        await waitForm(delay);
        ele[mid+1+i].style.background = "yellow";
        right[i] = ele[mid+1+i].style.height;
    }
    console.log("left="+left);
    console.log("right="+right);
    await waitForm(delay);
    let i=0, j=0, k=low;
    while(i<n1 && j<n2){
        await waitForm(delay);
        if(parseInt(left[i]) <= parseInt(right[j])){
            if(n1+n2 === ele.length){
                ele[k].style.background = "green";
            }
            else{
                ele[k].style.background = "lightgreen";
            }
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if(n1+n2 === ele.length){
                ele[k].style.background = "green";
            }
            else{
                ele[k].style.background = "lightgreen";
            }
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i<n1){
        await waitForm(delay);
        if(n1+n2 === ele.length){
            ele[k].style.background = "green";
        }
        else{
            ele[k].style.background = "lightgreen";
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j<n2){
        await waitForm(delay);
        if(n1+n2 === ele.length){
            ele[k].style.background = "green";
        }
        else{
            ele[k].style.background = "lightgreen";
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
    console.log(`low=${low} mid=${mid} high=${high}`);
    for(let i=low; i<=high; i++){
        console.log(`a[${i}]=${ele[i].style.height}`);
    }
}

async function mergeSort(ele, l, r){
    if(l>=r){
        return;
    }
    const m = l+Math.floor((r-l)/2);
    // console.log(`low=${l} mid=${m} high=${r}`)
    await mergeSort(ele, l, m);
    await mergeSort(ele, m+1, r);
    await merge(ele, l, m, r);
}

const mergesort = document.getElementById("mergesort");
mergesort.addEventListener("click", async ()=>{
    let ele = document.querySelectorAll(".bar");
    let l=0;
    let r=parseInt(ele.length)-1;
    for(let i=l; i<=r; i++){
        console.log(`a[${i}]=${ele[i].style.height}`);
    }
    console.log(r);
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await mergeSort(ele, l, r);
    enableSizeSlider();
    enableSortingBtn();
    enableNewArray();
})