{


//Type Alias

type Student={
    name:string,
    roll:number,
    gender:string,
    address?:string
}

const student1 : Student={
    name:"Mim",
    roll:1,
    gender: "female",
    address:"vaasa"
}

const student2 : Student={
    name:"dim",
    roll:10,
    gender: "male",

}
const student3 : Student={
    name:"jim",
    roll:15,
    gender: "female",
    address:"helsinki"
}


//string
 type UserName=string;
 type IsAdmin=boolean;
 const userName: UserName="Nowrin";
 const isAdmin: IsAdmin=true;

type Add=(x:number,y:number)=>number;

const add:Add=(num1,num2)=>num1+num2;

}