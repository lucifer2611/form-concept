// const person = {
//     firstName :'John',
//       lastName : 'Doe',
//       age : 30,
//       hobbies : ['Sports', 'movies','sleep'],
//       address : {
//           city : 'Chennai',
//           state : 'tn',
//           country : 'india'
//       }

// }
// const {firstName , lastName,address} = person;
// console.log(address);

// person.mail = 'John@gmail.com';
// console.log(person);

// const todos = [
//     {
//         id : 1,
//         task : 'trash taking',
//         isCompleted : true
//     },
//     {
//         id : 2,
//         task : 'meeting',
//         isCompleted : true
//     },
//     {
//         id : 1,
//         task : 'dentist',
//         isCompleted : false,

//     }
// ];

// console.log(todos[1].task);

//const todoslist = JSON.stringify(todos);
// console.log(todoslist);

// for(let i = 0 ;i <10 ; i++)
// {
//     console.log(todos[i]);
// }

//forEach
//  todos.forEach(function(todos1)
// {
//   console.log(todos1.task);;
// }

// )

//map
// const to = todos.map(function(todos)
// {
//     return todos.isCompleted;
// })

// console.log(to);
//filter
// const to = todos.filter(function(todos)
// {
//     return todos.isCompleted == true;
// })

// console.log(to);

//filter and map
// const to = todos.filter(function(todos)
// {
//     return todos.isCompleted == true;
// }).map(function(todos)
// {
//       return todos .task
// })

//  console.log(to);
 // Switch case
//    const x =10;
//     const color = x>10 ? 'red' : 'ye';

//     switch(color)
//     {
//         case 'red' :
//         {
//             console.log('red');
//             break;
//         }
//         case 'ye':
//             {
//                 console.log('ye');
//                 break;
                
//             }
//             default:
//                 {
//                     console.log('rw');
//                     break;
//                 }

//     }

//constructors

// function Person(firstName , lastName ,dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//      this.getFirstName = function ()
//     {
//         return this.firstName;
//     }

// }

// class Person{
//     constructor(firstName , lastName ,dob)
//     {
//         this.firstName = firstName;
//         this.lastName - lastName;
//         this.dob= dob;
//         }
//         getFirstName()
//         {
//             return this.firstName;
//         }
// }

// const person1 = new Person('s','Siva','10-10-08');

// console.log(person1.dob );

//addEventListener

// const btn = document.querySelector('.btn');

// btn.addEventListener('mouseover' , (e) => {
//    e.preventDefault();
   
//    //to change the bgcolor after clicking submit
//    document.querySelector('#my-form').style.background = '#ccc'


//    //to add a class to body from another class
//    document.querySelector('body').classList.add('bg-dark')
// })
// form elements
// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}