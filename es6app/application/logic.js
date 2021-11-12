const Categories = ['Electronics', 'Electrical', 'Fashion', 'Food'];
const Manufacturers = ['HP', 'Bajaj', 'TATA', 'Accer', 'Raymond', 'Britania'];

// USe this class to stored Product Information and
// generate headers for the Product Table 
class Product {
    ProductRowId=0;
    ProductId='';
    ProductName ='';
    CategoryName = '';
    Manufacturer = '';
    BasePrice=0;
}
// optionally the Proxy object can also be created to validate the Product class


class ProductLogic {
    #products=[];


    constructor(){}

    #validateProduct(){
        //validate, ProductId, ProductName, CategoryName,Manufacturer and BasePrice for Required, Pattern, etc.
        // if valid then return true else false
    }

    checkUniqueProductId(){
        // this method must check that ProductId MUST not be repeated
    }
    
    getProducts(){
        // Promise Based call to REST API
       
    }
    postProduct(product){
        // Promise Based call to REST API
        this.#validateProduct();
    }
    putProduct(id,product){
        // Promise Based call to REST API
        this.#validateProduct();
    }
    deleteProduct(id){
        // Promise Based call to REST API
    }
}