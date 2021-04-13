$(document).ready(function () {
    $('.carousel').carousel({
        fullWidth: true
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    })
    $('.collapsible').collapsible();
    // $('.modal').modal();
    $('.collapsible').collapsible();
    $('.reviews').carousel({ indicators: true });
    $('.comfort_carousel').carousel({ indicators: true, fullWidth: true, })
    //
    // let products = document.querySelectorAll('.product_slider');
    // let modalContent = document.querySelector('.modal-content');
    //
    // products.forEach((prod) => {
    //     prod.addEventListener('click', ()=> {
    //             let img = prod.querySelector('.product_img').src;
    //             let title = prod.querySelector('.product_title').innerText;
    //             let price = prod.querySelector('.product_price').innerText;
    //             modalContent.innerHTML = `
    //             <img src="${img}" alt="">
    //             <h3 class="product_title">${title}</h3>
    //             <p class="product_price">${price}</p>
    //             `
    //     })
        // modalBtn.addEventListener('click', () => {
        //     let img = prod.querySelector('.product_img').src;
        //     console.log(img);
        // })
    // })
});