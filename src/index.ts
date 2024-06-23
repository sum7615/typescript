let role:any = prompt("Role");
let product:any;
if(role=='admin'){
    product = prompt("Product Name");
}

class Demo {
    _productName:any;
    
    get ProductName(){
        return this._productName;
    }

    set ProductName(productname:any){
        if(role == 'admin'){
            this._productName=productname;
        }else{
            document.write("UnAutorized");
        }
        
    }
}
let obj = new Demo();
if(role){
    obj.ProductName=product;
}
if(obj.ProductName){
    document.write(`Product name: ${obj.ProductName}`);
}


