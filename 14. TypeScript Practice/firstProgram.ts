console.log("Hello World");

// let age : number=30;
// let fname : string='John';

// function add1(a:number,b:number):number{
//     return a+b;
// }
// var sum: number =add1(5,10);
// console.log(sum)

// type Employee = { name: string, salary: number};
// let emp1:Employee = {name:"Vaish", salary: 100}
// console.log(emp1);
// let emp2= {name:"Vaish", salary: '100'};
// console.log(emp2)


// interface IPerson { 
//     firstName:string, 
//     lastName:string, 
//     sayHi: ()=>string 
//  } 
 
//  var customer:IPerson = { 
//     firstName:"Tom",
//     lastName:"Hanks", 
//     sayHi: ():string =>{return "Hi there"} 
//  }




//  interface Vehicle{
//     wheels:number;
//  }
//  interface Car extends Vehicle{
//     make:string,
//     model:string
//  }
//  const myCar:Car={
//     wheels:4,
//     make:"Honda",
//     model:"Civic"
//  }
//  console.log(myCar);

//  let names: string[] = ['yash', 1, 'walker'];
//  console.log(names)
// let names = ['yash', 1, 'walker'];
// console.log(names)

// let message1="This is text";
// let message2=(message1 as string).length;
// console.log(message2)

// enum Color{
//     Red = 5,
//     Green = 6,
//     Blue = 8,
// }
// let color:Color = Color.Red;
// console.log(color)


// class MeetingRoom{
//     constructor(public room: string){}
//     private booking(){
//         console.log(`The ${this.room} room is booked`)
//     }
// }
// const booking1=new MeetingRoom('War Room');
// booking1.booking();

// interface FormField<T>{
//     value:T;
//     required:boolean;
// }
// function validateField<T>(field:FormField<T>):boolean{
//     if(field.required && !field.value){
//         return false;
//     }
//     return true;
// }

// const usernameField: FormField<string> = {value:"john_doe",required: true};
// const isValid = validateField(usernameField);

// interface OptionalPerson{
//     name?: string;
//     age?: number;
// }
// type RequiredPerson = Required<OptionalPerson>;

// let person1={};
// console.log(person1);

// type Employee = { name: string, salary: number};
// let emp1:Employee = {name:"Vaish", salary: 100}

interface User{
    id:number;
    name:string;
    email:string;
}
type UserInfo = Pick<User,'name'|'email'>;
