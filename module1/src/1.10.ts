{
    //union types // OR in JS

    type FrontendDeveloper= "fakibazDeveloper" | "juniorDeveloper";
    type FullStackDeveloper= "fakibazDeveloper" | "expertDeveloper";

    type Developer =FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontendDeveloper="juniorDeveloper";

    type User={
        name:string;
        email?:string;
        gender:"male"|"female";
        bloodGroup:"A+"|"B+"|"AB+"
    }

    const user1:User={
        name:"Mim",
        gender:"female",
        bloodGroup:"B+"
    }


    //Intersection type // AND in JS

    type FrontendDeveloper1={
        skills: string[];
        designation1:"Frontend Developer"
    }

    type BackendDeveloper={
        skills: string[];
        designation2:"Backend Developer"
    }

    type FullStackDeveloper1 =FrontendDeveloper1 & BackendDeveloper;

    const developer: FullStackDeveloper1={
        skills:["html","css","express"],
        designation1:"Frontend Developer",
        designation2:"Backend Developer"
    }
}