//   Object construtor- object.create (const ashue = new Object())
//  object literals - const ashi = {} 

 
 const mysymb = Symbol("key1")
 const ashish = {
    name : "ashish",
     "sir name": "girpunje",
     [mysymb] :"key1",
    age : 24,
    city : "wardha",
     gmail:"ashishgirpunje73@gmail.com",
     isLogedIn : false
 }
//   console.log(ashi sh.name);
//   console.log(ashish.gmail);
//   console.log(ashish["sir name"]);
//   console.log(ashish[mysymb]);
 

  ashish.name ="lakhan"
//   console.log(ashish);
//   Object.freeze(ashish)
//.... By doing this you canot change anything in created object
 
  ashish.name="ashi"
//    console.log(ashish);

 ashish.greeting = function(){
    // console.log("hello ashish");
 }
//  console.log( ashish.greeting());

 ashish.greetingtwo = function(){
    // console.log(`hello ashish,${this.name}`);
 }
//  console.log( ashish.greetingtwo());




// console.log(Object.keys(ashish));
// console.log(Object.values(ashish));
// console.log(Object.entries(ashish));
// console.log(ashish.hasOwnProperty('isLogedIn'));

// -------------------------------

const ashiUser ={}
 ashiUser.name="ashu"
 ashiUser.age =24
 ashiUser.isLoggedIn =false
//   console.log(ashiUser);

// -------------------------------------

const ashi1 = {
  name:"ashish",
   ashi2 : {
             ashi3: {
                      middlename : "rajesh",
                      sirname:"Girpunje"
                    }
            }
                }
// console.log(ashi1.ashi2);
// console.log(ashi1.ashi2.ashi3);
// console.log(ashi1.ashi2.ashi3.sirname);


// -------------------------------------------
const ashu1 ={ 1:"a",2:"b"}
const ashu2 ={ 3:"c",4:"d"}
//  console.log(ashu1,ashu2);


const ashu3 = Object.assign({},ashu1,ashu2)
//  console.log(ashu3);

 const ashu4 ={...ashu1,...ashu2}
// console.log(ashu4);


// -----------------------------------------

 const course =
  {
    name:" ashish",
    fee : "3338" ,
     courseInstructor :"javascript"
   }
  //     console.log(courseInstructor);

      const {courseInstructor}= course
       console.log(courseInstructor);

 