// let form = document.forms.login

// form.onsubmit = (e) => { // onsubmit нужен нам когда мы заполняем формы, onsubmit работает только с формами
//     e.preventDefault();

//     let fm = new FormData(form) // форм это форма, дата это информация, информация из форма он получает всю информации из форма

//     let user = {
//         email: fm.get('email'), // метод get он забирает только что мы написали вунтри input а
//         password: fm.get('password')
//     }

//     // fm.forEach((val, key) => {
//     //     user[key] = val
//     // })

//     console.log(user); 

// }