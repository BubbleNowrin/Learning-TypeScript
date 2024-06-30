//Reference Type --> Object

let user: {
    company:"Programming Hero"; // type- literal type .. if we use any fixed value, where we won't add anything then we can use this literal type
    firstName:string;
    middleName?:string; //optional type // it can be here or not
    lastName:string;
}={
    company:"Programming Hero",
    firstName:"Nowrin",
    lastName:"Mim"
}


let user1: {
    readonly company:"Programming Hero";
    firstName:string;
    middleName?:string; //optional type // it can be here or not
    lastName:string;
}={
    company:"Programming Hero",
    firstName:"Nowrin",
    lastName:"Mim"
}

// user1.company="PH" // if we use access modifier like readonly then we can't change the value. it is fixed.  

//we can't change the value of literal type also