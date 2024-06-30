{
    
// destructuring

//object
const user={
    id:1,
    name: {
    firstName:"Nowrin",
    middleName:"Islam",
    lastName:"Mim"
},
    contactNo:"017200000000",
    address:"vaasa"
}


const {contactNo, name:{middleName: midName}}=user; //while destructuring we can't define types, here we can only alias name.


//array

const friends=["rachel","monica","phoebe","ross","joey","chandler"];

const [,,bestFriend,...friend]=friends;



}