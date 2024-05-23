let user= {
    fname: "Yazeed",
    age: 25,
    id: "123456",
    email: "ss@gmail.com",
    available: false,

    avi:function cheakavi(){
        if(this.available===true){
            console.log("free to work");
        
    }else{
        console,log("Not avi")
    }

        
    },
    addres: {
        city:{
         one: "riyadh",
         two: "lddk",
         
        },
    cunrty: "ksa",
    phone: "054444444",

        
    },
    skils: ["Js", "html", "css"],




}
// user.cheakavi()
console.log(user);
console.log(user.fname);
delete user.id
console.log(user);
console.log(user.addres);
console.log(user.addres.city);
console.log(user.skils[2])



// console.log(user);
// console.log(user);