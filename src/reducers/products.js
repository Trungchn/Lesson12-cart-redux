var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10, // so luong san pham con trong kho
        rating: 4
    },
    {
        id: 2,
        name: 'Sony Xperia XZ',
        image: 'https://bizweb.dktcdn.net/100/019/638/products/thumb-60147-default-big.jpg?v=1499397533470',
        description: 'Sản phẩm do Sony sản xuất',
        price: 600,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: 'Samsung Galaxy S9',
        image: 'https://www.t-mobile.com/content/dam/t-mobile/assets/foreground/devices/45-Q118-fg-StarStar2-PreReg-Samsung-S9-Lilac-White-Logo.mobile.png',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 900,
        inventory: 20,
        rating: 5
    }
];

const products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;