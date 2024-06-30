//Learning function
//normal function

function add(num1:number,num2:number=10): number{
    return num1 + num2;
}

add(2,2);

//arrow function

const addArrow=(num1:number, num2:number): number=> num1+num2;

//object --> function --> method // if a function is inside a object then it is called method

const poorUser={
    name:"Mim",
    balance: 0,
    addBalance(balance:number):number {
        return this.balance+balance;
    }
}

const poorUser1={
    name:"Mim",
    balance: 0,
    addBalance(balance:number):string {
        return `my new balance is ${this.balance+balance}`;
    }
}

// we are using normal anonymous function as if we want to access any property of the object inside the function then we need to use this which we can't use inside the arrow function.

const arr: number[]=[1,2,4];

const newArr:number[]= arr.map((elem:number):number=>elem*elem)