{

    //nullable type

    const searchName=(value: string | null)=>{
        if(value){
            console.log("searching");
        }else{
            console.log("nothing to search");
        }
    }

    searchName("Mim");
    searchName(null);


    // unknown type

    const speedInMeterPerSecond=(value:unknown)=>{
        if(typeof value === "number"){
            const convertedSpeed= (value * 1000) / 3600;
            console.log(convertedSpeed);
        }
        else if(typeof value === "string"){
            const [speed,unit]= value.split(" ");
            const convertedSpeed= (parseFloat(speed) * 1000) / 3600;
            console.log(convertedSpeed);
        }else{
            console.log("not convertable");
        }
    }

    speedInMeterPerSecond(100);
    speedInMeterPerSecond("100 km/h");
    speedInMeterPerSecond(null);


    //never type

    const throwError=(msg: string)=>{
        throw new Error(msg)
    }

    throwError("Mushkil se Error hogaya");

    //if we know that this won't return anything then we can define it as never type ,, like this error function.. it will directly throw error, it won't return anything
}