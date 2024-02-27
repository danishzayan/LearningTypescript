// let num1: number = 1;
// function calculate(num1: number, num2: number) {
//     return num1+num2;
// }
// console.log(calculate(num1,4));  


// function getTotal(numbers: Array<number>) {
//     return numbers.reduce((acc, item) => {
//         return acc + item;
//     }, 0);
// }
// console.log(getTotal([3,2,1]));


// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     role: 'professor',
// };
// console.log(user);


// type alias for custom type 
// type User = {
//     name: string;
//     age: number;
//     address?: string; // ? this for optional
// }

// const user: User = {
//     name: 'Danish Z',
//     age: 23,
// }

// function login(userData: User): User  {
    
//     return userData;
// }


// creating interfaces
interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transaction: Transaction[];
}

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: 'John Doe',
}
