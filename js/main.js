//arrays
const products = [
    { id: 1, name: "DermoPure Eucerin", price: 3000, category: "Limpiadores" },
    { id: 2, name: "Aveno", price: 2500, category: "Limpiadores" },
    { id: 3, name: "Effaclar", price: 4000, category: "Limpiadores" },
    { id: 4, name: "Serum Niacinamida", price: 1200, category: "Serums" },
    { id: 5, name: "Serum de Vitamina C", price: 1300, category: "Serums" },
    { id: 6, name: "Serum de Ac. Hialuronico", price: 2050, category: "Serums" },
    { id: 7, name: "Aquaporin Eucerin", price: 4500, category: "Cremas" },
    { id: 8, name: "Effaclar mat", price: 4800, category: "Cremas" },
    { id: 9, name: "Hydraphase Avene", price: 5000, category: "Cremas" },
    { id: 10, name: "Fusion Water", price: 4400, category: "Protector Solar" },
    { id: 11, name: "Anthelios uvmune400", price: 4480, category: "Protector Solar" }
]

//Variables generales
const descuento = x => x * 0.10
let filterProduct = []
let shop = []
let salida = []
let subtotal = 0
let totalPay = 0

//Funcion de filtrado
function findProduct(array, filter) {
    const categoryProduc = array.find((service) => {
        return service.category.includes(filter)
    })
}
//Bienvenida a la pagina
alert("Bienvenido a SkinCare Alaska")
let user = prompt("Ingrese su nombre").toUpperCase()

alert("Bienvenido " + user)

//Eleccion de productos
alert("A continuación Usted podrá realizar la compra de productos de skincare. A partir de las 4 unidades se realizará un descuento de 10%.")
do {
    let optionCategory = prompt("Seleccione una categoria para comprar: \n1-Limpiadores\n2-Serums\n3-Cremas\n4-Protector Solar\n0-Para finalizar compra")
    switch (optionCategory) {
        case "1":
            findProduct(products, optionCategory);

            filterProduct.forEach(product =>
                product.sale = parseFloat(prompt("Ingrese la cantidad de " + product.name + " " + "\nPrecio: $ " + product.price))
            )
            shop = shop.concat(filterProduct.filter(product => product.sale > 0))

            break
        case "2":
            findProduct(products, optionCategory);

            filterProduct.forEach(product =>
                product.sale = parseFloat(prompt("Ingrese la cantidad de " + product.name + " " + "\nPrecio: $ " + product.price))
            )
            shop = shop.concat(filterProduct.filter(product => product.sale > 0))
            break
        case "3":
            findProduct(products, optionCategory);

            filterProduct.forEach(product =>
                product.sale = parseFloat(prompt("Ingrese la cantidad de " + product.name + " " + "\nPrecio: $ " + product.price))
            )
            shop = shop.concat(filterProduct.filter(product => product.sale > 0))

            break
        case "4":
            findProduct(products, optionCategory);

            filterProduct.forEach(product =>
                product.sale = parseFloat(prompt("Ingrese la cantidad de " + product.name + " " + "\nPrecio: $ " + product.price))
            )
            shop = shop.concat(filterProduct.filter(product => product.sale > 0))

            break
        case "0":
            break
        default:
            alert("Por favor ingrese alguna de las opciones válidas")
            break
    }
} while (optionCategory != 0)
let totalQuatity = shop.reduce((acumulado, product) => acumulado + product.sale, 0)
let quatity= shop.forEach(product=> { salida = salida + product.sale + " unidades de " + product.name + " " + "de la categoria " + product.category })
if (totalQuatity < 3 && totalQuatity > 0) {
    alert(salida)
    let totalGeneral = shop.forEach(product => { subtotal = subtotal + (product.sale * product.price) })
    totalPay= subtotal
    alert("Usted ha comprado " + shop.reduce((acumulado, product) => acumulado + product.sale, 0) + " unidades. No posee descuento. Total a pagar: $ " + totalPay)
} else {
    alert(salida)
    suma = shop.forEach(product => { subtotal = subtotal + (product.sale * product.price) })
    totalPay = subtotal + parseFloat(descuento(subtotal).toFixed(2))
    alert("Usted ha comprado " + shop.reduce((acumulado, product) => acumulado + product.sale, 0) + " unidades. Obtiene un descuento de $ " + descuento(subtotal).toFixed(2) + "\nTotal a pagar: $ " + totalAPagar)

}
alert("Gracias " + user + " por comprar en SkinCare Alaska. Esperamos que disfrute de nuestros productos")

