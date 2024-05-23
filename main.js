// let user= {
//     fname: "Yazeed",
//     age: 25,
//     id: "123456",
//     email: "ss@gmail.com",
//     available: false,

//     avi:function cheakavi(){
//         if(this.available===true){
//             console.log("free to work");
        
//     }else{
//         console,log("Not avi")
//     }

        
//     },
//     addres: {
//         city:{
//          one: "riyadh",
//          two: "lddk",
         
//         },
//     cunrty: "ksa",
//     phone: "054444444",

        
//     },
//     skils: ["Js", "html", "css"],




// }
// // user.cheakavi()
// console.log(user);
// console.log(user.fname);
// delete user.id
// console.log(user);
// console.log(user.addres);
// console.log(user.addres.city);
// console.log(user.skils[2])



// // console.log(user);
// // console.log(user);

characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];
let bluEye = characters.find(el=> el.eye_color==="blue");
console.log(bluEye);

let massIs = characters.find(el=> el.mass>50&& el.gender==="male")
console.log(massIs)

let highetover = characters.filter(el=> el.height<200)
  
 console.log(highetover);

 let allMale = characters.filter(elm=> elm.gender==="male")
 console.log(allMale)

 let bymess = characters.sort(elm => elm.mass -elm.mass)
 console.log(bymess);

 let sortHigh = characters.sort(elm=> elm.height+ elm.height)
 console.log(sortHigh);

 let morethen = characters.every(elm => elm.mass>400)
console.log(morethen);

let shortethen = characters.every(elm => elm.height<200)
console.log(shortethen);

let blueeyes = characters.some(elm => elm.eye_color==="blue")
console.group(blueeyes)

let tallerthen = characters.some(elm => elm.height>200)
console.group(tallerthen)