class Customer1{
     private firstname:string
     private lastname:string
    constructor(firstname:string,lastname:string){
        this.firstname=firstname
        this.lastname=lastname
    }
    greeter(){
      console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}
let customer1=new Customer1("Mina","Lotfy")
customer1.greeter()

