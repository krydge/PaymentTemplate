// Coffee: price_1N6xXfBx51FhtWhe533Nu4lM
// Sunglassess: price_1N6xZABx51FhtWhesSZdBh6b
// Camera: price_1N6xa5Bx51FhtWheBOFuo4k7


const productsArray = [
    { id: "price_1N6xXfBx51FhtWhe533Nu4lM", title: "Coffee", price: 5.99 },
    { id: "price_1N6xa5Bx51FhtWheBOFuo4k7", title: "Camera", price: 29.99 },
    { id: "price_1N6xZABx51FhtWhesSZdBh6b", title: "Sunglassses", price: 10.99 }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id)
    if (productData === undefined) {
        console.log('[Error]-- Product data does not exist for id: ' + id)
        return undefined
    }
    return productData
}
export { productsArray, getProductData }