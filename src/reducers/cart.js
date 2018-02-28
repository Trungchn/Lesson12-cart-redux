import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART')); // luu data vao localStorage
var initialState = data ? data : []; 

const cart = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1; // khong tim thay thi index = -1
    switch (action.type) {
        case Types.ADD_TO_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                });
            }
            localStorage.setItem('CART', JSON.stringify(state)); // luu state vao local
            return [...state];
        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1); //ham splice (vi tri, so luong) dung de xoa phan tu trong state
            }
            localStorage.setItem('CART', JSON.stringify(state)); // luu state vao local
            return [...state];
        case Types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state)); // luu state vao local
            return [...state];
        default: return [...state];
    }
}

var findProductInCart = (cart, product) => { //kiem tra san pham da ton dai hay chua
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default cart;