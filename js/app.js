window.addEventListener("load", ()=> {
    // let select = document.getElementsByClassName("thumb");

    // for (let key in select) {
    //     if (select.hasOwnProperty(key)) {
    //         select[key].addEventListener("mousedown", ()=>{
    //             select[key].classList.toggle("effect");
    //         });
    //         // select[key].addEventListener("mouseup", ()=>{
    //         //     select[key].classList.toggle("effect");
    //         // });
    //     }
    // }
    // $("thumb").imgCheckbox();
    // $("img").imgCheckbox({
    //     "styles": {
    //         "span.imgCheckbox.imgChked img": {
    //             // It's important to note that overriding the "filter" property will remove grayscaling
    //             "filter": "blur(5px)",
    
    //             // This is just css: remember compatibility
    //             "-webkit-filter": "blur(5px)",
    
    //             // Let's change the amount of scaling from the default of "0.8"
    //             "transform": "scale(0.9)"
    //         }
    //     }
    // });
    $("img").imgCheckbox();
});