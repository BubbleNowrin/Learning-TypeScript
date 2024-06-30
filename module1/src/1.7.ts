{
    //spread operator --> spread operator spreads all the elements in an array
    //rest operator

    const bros1:string[]=["mir","mizan","firoz"];
    const bros2:string[]=["rahat","riyan","mezba"];

    bros1.push(...bros2);


    const mentors1={
        typescript:"mezba",
        redux:"mir",
        dbms:"mizan"
    }

    const mentors2={
        prisma:"firoz",
        cloud:"nahid",
        next:"tanmoy"
    }

    const mentorsList={
        ...mentors1,
        ...mentors2
    }


    //rest operator --> rest operator takes all the elements and create an array

    const greetFriends=(...friends: string[])=>{ 
        friends.forEach((friend:string)=>console.log(`Hi ${friend}`))
    }

    greetFriends("abul","kabul","babul","bokul");
}