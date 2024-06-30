//Basic Data Types
//Primitive

// string
let firstName: string = "Nowrin Islam Mim"

//number
let x: number =10

// undefined
let a: undefined = undefined

// null
let b:null=null

//boolean
let isAdmin:boolean=true

//any
let d;
d=123;
d="dd"; // we should not use this. it is same as using javascript.


//Non-Primitive 

//Array

let friends : string[]=["mim","dim"];

friends.push("tweety");

let rolls: number[]=[10,20];

//Tuple --> Array --> order --> type of values

let coordinates:[number,number]=[10,20];

let ageName:[number,string,boolean]=[50,"Mr.x",true];

ageName[0]=60;