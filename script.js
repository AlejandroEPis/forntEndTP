const btnup = document.getElementById("up") ;

window.addEventListener("scroll", (e)=>{
    let y = document.documentElement.scrollTop;
    if(y === 0){
        btnup.classList.add("oculto"); 
        btnup.classList.remove("activo");
    }else if(y >= 300){
        btnup.classList.add("activo");
        btnup.classList.remove("oculto"); 
    }
})

document.addEventListener("click", (e)=>{
    if(e.target=== btnup || e.target.matches("fa-sort-up")){
        window.scrollTo({
            behavior: "smooth",
            top:0
        });
    }
});



