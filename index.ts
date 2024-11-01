// class User {
//     name: string
//     age: number

// constructor(name: string, age: number){
//     this.name = name
//     this.age = age
// }

// isAdult(): boolean {
// if(this.age >= 18){
//     return true;
// }
// else{
//     return false
// }
// }
// }

// const user1 = new User('jazi', 2);
// console.log(user1.isAdult());

// class Banking {
//     deposit: number;
//     accountNum = 12345
//     withdrawal: number; 
//     amount: number;
//     balance: number; 
//     newBalanace: number
//     newDeposit: number;
    
//     constructor(deposit : number, withdrawal: number, newDeposit: number){
//         this.deposit = deposit
//         this.withdrawal = withdrawal
//         this.amount = this.deposit
//         this.balance = deposit - withdrawal
//         this.newDeposit = newDeposit
//         this.newBalanace = this.balance + newDeposit
//     }

//     depositAmt(){
//      return `you deposited R${this.deposit} your total amount is R${this.amount}`

//     }

//     withdrawalAmt(){
//         return `you have withdrawn R${this.withdrawal} your balance is R${this.balance}`
//     }

//     newBal(){
//         return `you have deposited R${this.newDeposit} your new balance is R${this.newBalanace}`
//     }
// }

// let deposits = new Banking(500, 300, 700)
// console.log(deposits.depositAmt());
// console.log(deposits.withdrawalAmt());
// console.log(deposits.newBal());

// class BankingAcc{
//     accNum : string;
//     balance: number;

//     constructor(accNum: string, initialBal: number){
//      this.accNum = accNum;
//      this.balance = initialBal;
//     }

//     deposit(amount: number):void {
//         this.balance += amount;
//          console.log(`deposit was successfull: new balance is R${this.balance}`);
//     }

//     withdraw(amount: number): void {
//         if (this.balance >= amount){
//             this.balance -= amount
//             console.log(`withdrawal was successfull: new balance is R${this.balance}`);
//         } else{
//             console   .log(`insufficient funds`);
//         }
//     }
// }
// const account = new BankingAcc('122443', 500)
// account.deposit(400)
// account.withdraw(250)
// account.withdraw(1000)

// class Products {
//     name: string
//     price: number
//     stock : number;
    

//     constructor(name: string, price: number, stock: number){
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }

//     isAvailable(): boolean {
//       if(this.stock > 0){
//         // console.log(`Out of stock`);
//         return true
//       }
//       else{
//         // console.log(`you can purchase`);
//         return false
//       }
//     }

//     buy(quantity: number): string{
//         if (this.stock >= quantity){
//           this.stock -= quantity
//           return ` Purchase succesfull! ${quantity} ${this.name}(s) bought. Remaining stock: ${this.stock} `            
//         }
//         else{
//             return `Out of stock`
//         }
//     }
// }

// const purchase = new Products('Apple', 5, 15)
// console.log(purchase.isAvailable());
// console.log(purchase.buy(4));
// console.log(purchase.buy(4));

let day: number = 0;

switch (day) {
    case 0: 
    console.log('Today is Sunday');
    break;

    case 1: 
    console.log('Today is Monday');
    break;

    case 2: 
    console.log('Today is Tuesday');
    break;

    case 3: 
    console.log('Today is Wednesday');
    break;

    default: 
    console.log('Selected day does not exist');
}