let home_link = document.getElementById("link_res")

home_link.addEventListener("click", function () {
    console.log("Called");
    let home_link_res = document.getElementById("home_links")
        home_link_res.classList.toggle("home_link_res")
})