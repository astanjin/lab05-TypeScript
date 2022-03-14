var Customer1 = /** @class */ (function () {
    function Customer1(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Customer1.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstname, " ").concat(this.lastname));
    };
    return Customer1;
}());
var customer1 = new Customer1("Mina", "Lotfy");
customer1.greeter();
