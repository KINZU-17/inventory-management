const products = [];
products.push(
    { name: "Laptop" },
    { name: "Phone" },
    { name: "Headphones" },
    { name: "Monitor" }
);

logFirstProduct();

function logFirstProduct() {
    console.log("First product in inventory:", products[0]);
}

function addProduct(name) {
    products.push({ name: name });
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index].name = newName;
    } else {
        console.log("Invalid product index");
    }
}

function removeLastProduct() {
    if (products.length > 0) {
        products.pop();
    } else {
        console.log("Inventory is empty");
    }
}