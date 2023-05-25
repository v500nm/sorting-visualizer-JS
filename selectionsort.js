console.log("inside selection sort");

async function selection() {
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length; i++) {
        let min_index = i;
        ele[i].style.background = "blue";
        // await waitForm(delay);
        for (let j = i + 1; j < ele.length; j++) {
            ele[j].style.background = "pink";
            await waitForm(delay);
            if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
                if (min_index !== i) {
                    ele[min_index].style.background = "cyan";
                }
                min_index = j;
            } else {
                ele[j].style.background = "cyan";
            }
        }

        await waitForm(delay);
        swap(ele[min_index], ele[i]);
        ele[min_index].style.background = "cyan";
        ele[i].style.background = "green";
    }
}

const selectionsort = document.getElementById("selectionsort");
selectionsort.addEventListener("click", async () => {
    disableNewArray();
    disableSizeSlider();
    disableSortingBtn();
    await selection();
    enableSizeSlider();
    enableSortingBtn();
    enableNewArray();
})