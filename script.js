
// ترحيب عند فتح الموقع
window.onload = function () {
    console.log("Welcome To TOOLS CODE");
};

// تأثير للأزرار
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 120);
    });
});

// عداد المنتجات في السلة
let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    alert(name + " تمت إضافته إلى السلة");

    console.log(cart);
}

// حساب المجموع
function totalPrice() {
    let total = 0;

    cart.forEach(item => {
        total += item.price;
    });

    return total;
}
