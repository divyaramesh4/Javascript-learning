class Product{
    constructor(name,Price){
        this.name = name,
        this.Price = Price

    }
    displayproduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.Price}`)
    }
}
const product1 = new Product("Shirt", 1999)
product1.displayproduct();