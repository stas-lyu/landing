document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');

});

// Or with jQuery

$(document).ready(function () {
    
    // $('.collapsible').collapsible();
    // $('.reviews').carousel({ indicators: true });
    // $('.comfort_carousel').carousel({ indicators: true, fullWidth: true, })
    $('.carousel').carousel({ indicators: true, fullWidth: false, numVisible: 1});
    $('.comfort_carousel').carousel({indicators:true,fullWidth:true,})
    $('.modal').modal();
    let products = document.querySelectorAll(".product_slider");
    let modalContent = document.querySelector(".modal-content");
    let modalBtn = document.querySelector(".modal-trigger")
    products.forEach((prod) => {
        prod.addEventListener("click", () => {
            let img = prod.querySelector(".product_img").src;
            let title = prod.querySelector(".product_title").innerText;
            let color = prod.querySelector(".product_color").innerText;
            let size = prod.querySelector(".product_size").innerText;
            let price = prod.querySelector(".product_price").innerText;
            modalContent.innerHTML=`
            <img src="${img}" alt="">
            <div>
            <h3 class="product_title">${title}<h3>
            <p class="product_color">${color}<p>
            <p class="product_size">${size}<p>
            <p class="product_price">${price}<p>
            </div>
            `
            console.log({img},{title},{color},{size},{price})
        })
    })
})
