let num = 0;
let totalPrice = 0;
let totalAmount = 0;
let priceHtml = document.getElementById('pro_amount');
let numberHtml = document.getElementById('insert_number');
let totalAmountHtml = document.getElementById('total_amount');
let wishListId=document.getElementById('wish_list');


const numberChange = (type, productPrice) => {
    if (type === 'increment') {
        if (num < 5) {
            num++;
            totalPrice += productPrice;
            totalAmount = totalPrice + 50;
            priceHtml.innerHTML = Math.floor(totalPrice);
            totalAmountHtml.innerHTML = Math.floor(totalAmount);
        } else {
            const numberHtml = document.querySelector('.page_number');
            numberHtml.style.backgroundColor = 'red';
            alert('you can not enter more than 5');
        }
    } else {
        if (num <= 0) {
            alert('Negative Number is not Possible !!')
        } else {
            num--;
            totalPrice = totalPrice - productPrice;
            totalAmount = totalPrice + 50;
            priceHtml.innerHTML = Math.floor(totalPrice);
            totalAmountHtml.innerHTML = Math.floor(totalAmount);
        }
    }
    numberHtml.innerHTML = num;

}