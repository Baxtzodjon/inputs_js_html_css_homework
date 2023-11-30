// let form = document.forms.login // получать формы

// form.onsubmit = (e) => { // onsubmit нужен нам когда мы заполняем формы, onsubmit работает только с формами
//     e.preventDefault(); 

//     let fm = new FormData(form) // форм это форма, дата это информация, информация из форма он получает всю информации из форма // чтобы понимал что получать FormData нужно указать в HTML нужно написать name и потом он понимает что нужно забирать

//     let user = {
//         email: fm.get('email'), // метод get он забирает только что мы написали вунтри input а
//         password: fm.get('password')
//     }

//     // fm.forEach((val, key) => { // если у нас input и будет много то надо использовать forEach
//     //     user[key] = val
//     // })

//     console.log(user); 

// }


let form = document.forms.registration
let inps = document.querySelectorAll('input')
// let inps = form.getElementsByTagName('input') // getElementsByTagName() Element. getElementsByTagName() метод возвращает живую коллекцию элементов HTMLCollection , учитывая имя тэга.

let patters = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71|88)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/,
    motherName: /^[a-z ,.'-]+$/i,
    fatherName: /^[a-z ,.'-]+$/i,
    age: /^\S[0-9]{0,3}$/,
    about: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    fav_car: /^[a-z ,.'-]+$/i
}

inps.forEach(inp => {
    let parent = inp.parentElement
    let span_error = inp.nextElementSibling


    inp.onkeyup = () => {
        if (patters[inp.name].test(inp.value)) {
            parent.classList.remove('error-field')
            span_error.innerHTML = ""
        } else {
            parent.classList.add('error-field')
            span_error.innerHTML = `Invalid data entered`
        }
    }
})

form.onsubmit = (e) => {
    e.preventDefault();
    let isError = false


    inps.forEach(inp => {
        let parent = inp.parentElement
        let p_error = inp.nextElementSibling

        parent.classList.remove('error-field')
        p_error.innerHTML = ""

        if (inp.value.length === 0 && parent.classList.contains('required')) {
            parent.classList.add('error-field')
            p_error.innerHTML = 'Please enter your ' + inp.id
            isError = true
        }
    })


    if (isError) {
        alert('Error')
    } else {
        submit()
    }
}

function submit() {
    let fm = new FormData(form)

    let user = {
        // name: fm.get('name'),
        // surname: fm.get('surname')
    }

    fm.forEach((val, key) => {
        user[key] = val
    })

    console.log(user);
}