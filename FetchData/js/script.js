const btn = document.querySelector('#get_product')
btn.addEventListener('click', () => {
    const input = document.querySelector('#product')
    fetch("https://fakestoreapi.com/products/" + input.value)
        .then((response) => response.json())
        .then((data) => setContent(data))

})

const setContent = (data) => {
    const productContent = document.querySelector('.product-content');
    const img = document.querySelector('.product-img-box img');
    img.src = data.image
    delete data.image
    delete data.rating
    delete data.id
    productContent.innerHTML = ''
    for (item in data) {
        let li = document.createElement('li')
        li.innerHTML = item + ": " + data[item]
        productContent.append(li)
    }
}