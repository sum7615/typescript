var role = prompt("Role");
var product;
if (role == 'admin') {
    product = prompt("Product Name");
}
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Object.defineProperty(Demo.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (productname) {
            if (role == 'admin') {
                this._productName = productname;
            }
            else {
                document.write("UnAutorized");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Demo;
}());
var obj = new Demo();
if (role) {
    obj.ProductName = product;
}
if (obj.ProductName) {
    document.write("Product name: ".concat(obj.ProductName));
}
