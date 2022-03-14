class Customer{
    firstname:string
    lastname:string
   
    greeter(){
      console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}
let customer=new Customer()
customer.firstname="Mina"
customer.lastname="Lotfy"
customer.greeter()
