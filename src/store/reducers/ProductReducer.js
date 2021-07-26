const initState = {
    products: [
        {
            id: 1, name: 'Mens Regular Shirt', image: '1.jpg', price: 20, discount: 2, dicountPrice: 20 - 2 / 100 * 20, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 2, name: 'woman jacket for winters', image: '2.jpg', price: 30, discount: 5, dicountPrice: 30 - 5 / 100 * 30, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 3, name: 'man trouser for all season', image: '3.jpg', price: 15, discount: 3, dicountPrice: 15 - 3 / 100 * 15, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 4, name: 'shoes for men', image: '4.jpg', price: 50, discount: 4, dicountPrice: 50 - 4 / 100 * 50, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 5, name: 'suit for summer', image: '5.jpg', price: 25, discount: 2, dicountPrice: 25 - 2 / 100 * 25, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 6, name: 'mens jeans', image: '6.jpg', price: 60, discount: 6, dicountPrice: 60 - 6 / 100 * 60, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 7, name: 'Trouser for all seasons', image: '7.jpg', price: 35, discount: 2, dicountPrice: 35 - 2 / 100 * 35, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 8, name: 'Jacket for winter', image: '8.jpg', price: 80, discount: 7, dicountPrice: 80 - 7 / 100 * 80, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 9, name: 'Mens Slim Casual Shirt', image: '9.jpg', price: 95, discount: 4, dicountPrice: 95 - 4 / 100 * 95, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        },
        {
            id: 10, name: 'Jacket for men', image: '10.jpg', price: 120, discount: 3, dicountPrice: 120 - 3 / 100 * 120, quantity: 1,
            desc: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
        }

    ],
    product:{}

}

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT":
            return{...state,product:state.products.find(product=>product.id===parseInt(action.id))}
            
        default:
            return state;
    }
    
}

export default ProductReducer;