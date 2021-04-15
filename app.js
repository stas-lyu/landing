   $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    })
    $('.collapsible').collapsible();
    // $('.modal').modal();
    $('.collapsible').collapsible();
    $('.reviews').carousel({ indicators: true });
    $('.comfort_carousel').carousel({ indicators: true, fullWidth: true, })

    $(document).ready(function () {
        $('.carousel').carousel({
            fullWidth: true
        });
        $('.modal').modal();
        const products = document.querySelectorAll('.product_slider');
        const modalImg = document.querySelector('.modal_img');
        const modalText = document.querySelector('.modal_ul');

        products.forEach((prod) => {
            prod.addEventListener('click', ()=> {
                const img = prod.querySelector('.product_img').src;
                const title = prod.querySelector('.product_title').innerText;
                const price = prod.querySelector('.product_price').innerText;
                const productInfo = prod.querySelector('.product_info').innerText;
                const productArticul = prod.querySelector('.articul').innerText;
                const productColor = prod.querySelector('.product_color').innerText;
                const productSize = prod.querySelector('.size').innerText;
                modalImg.innerHTML = `<img src="${img}" alt="">`
                modalText.innerHTML = `
                    <h4>${productInfo}</h4>
                    <ul>
                        <li>${productArticul}</li>
                        <li>${title}</li>
                        <li>${productColor}</li>
                        <li>${productSize}</li>
                        <li>${price}</li>
                    </ul>
                    
                    
                `
            })
        })
    });
