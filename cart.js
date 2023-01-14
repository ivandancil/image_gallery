//making function
function ready() {
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
}

//remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}