$(document).ready(function() {
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,


    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    })
    $('.collapsible').collapsible();

    $('.collapsible').collapsible();
    $('.reviews').carousel({ indicators: true });
    $('.comfort_carousel').carousel({ indicators: true, fullWidth: true, })
    $('.modal').modal();

    let products = document.querySelectorAll('.product_slider');
    let modalContent = document.querySelector('.modal-content');

    products.forEach((prod) => {
        prod.addEventListener('click', () => {
            let img = prod.querySelector('.product_img').src;
            let title = prod.querySelector('.product_title').innerText;
            let price = prod.querySelector('.product_price').innerText;
            let oldPrice = prod.querySelector('.old_price').innerText;
            let newPrice = prod.querySelector('.new_price').innerText;
            let bagName = prod.querySelector('.bag_name').innerText;
            let descriptionBag = prod.querySelector('.description_bag').innerText;
            let sizeBag = prod.querySelector('.size_bag').innerText;
            modalContent.innerHTML = `
            <div class='row'>
            <div class='col m6 s12'>
            <img src="${img}"alt=''class="responsive-img">
            </div>
            <div class='modal_text col m6 s12 '>
            <p class="bag_name">${bagName}</p>
            </h3 class="product_title">${title}</h3>
            <p class="description_bag">${descriptionBag}</p>
            <p class="size_bag">${sizeBag}</p>
            <p class="product_price"><span class='old_price'>${oldPrice}</span> <span class='new_price'>${newPrice}</span></p>
            </div>
            </div>
            <div class='row'>
            <div class='col m12 s12'>
            <label for="name">
                <input type="text" placeholder="Как вас зовут?" id="name">
            </label>
            <label for="phone">
                <input type="text" placeholder="Ваш номер телефона" id="phone">
            </label>
            <div class="btn_div_modal">
            <a class="waves-effect grey darken-4 btn">Заказать</a>
            </div>
            </div>
            `
        })
    })
});