{
    //ternary operator | optional chaining | nullish coalescing operator
    const age= 18;

    if(age>=18){
        console.log("Adult");
    }else{
        console.log("Not Adult");
    }

    const isAdult= age>= 18 ? "Adult" : "Not Adult";
    console.log({isAdult});

    //if i have to make any decision based on null/ undefined then we use nullish coalescing operator

    const isAuthenticated=null;
    // const isAuthenticated=undefined;

    const result1= isAuthenticated ?? "Guest" ;
    const result2 =isAuthenticated ? isAuthenticated : "Guest";
    
    console.log({result1}, {result2});

    // if we use ternary operator it will generate same result for any type of falsy value whether its empty string or null or undefined ,,, but nullish coalescing will only work on null/undefined

    type User={
        name: string;
        address: {
            city: string;
            post: string;
            street?: string;
        }
    }

    const user: User={
        name:"mim",
        address:{
            city:"vaasa",
            post:"65100",
        }
    }

    const street= user?.address?.street ?? "No Street";

    console.log({street});
}