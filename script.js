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
let inps = form.getElementsByTagName('input') // getElementsByTagName() Element. getElementsByTagName() метод возвращает живую коллекцию элементов HTMLCollection , учитывая имя тэга.
let paragrafs = document.querySelectorAll('.p_small_text')
let labels = document.querySelectorAll('label')
let blueInput = document.querySelector('.fifth_input');
let redInput = document.querySelector('.sixth_input');
let surName = document.querySelector('.second_input');
let phoneNumber = document.querySelector('.fourth_input');
let favCar = document.querySelector('#favourite_car');

form.onsubmit = (e) => {
    e.preventDefault();

    let user = {}

    let fm = new FormData(form)

    let errorNames = []

    fm.forEach((val, key) => {
        user[key] = val
    })

    for (let key in user) { // for in это цикл по объекту а for of цикл по массиву
        if (user[key].length === 0) {
            errorNames.push(key);
            inps[key].classList.add('error');
            if (key === 'email') {
                for (let i = 0; i < paragrafs.length; i++) {
                    paragrafs[i].innerHTML = 'Please enter your email adress';
                    paragrafs[i].style.color = 'red';
                }
                for (let i = 0; i < labels.length; i++) {
                    labels[i].style.color = 'red';
                }
            }
        } else {
            inps[key].classList.remove('error');
            if (key === 'email') {
                for (let i = 0; i < paragrafs.length; i++) {
                    paragrafs[i].innerHTML = 'Need to fill';
                    paragrafs[i].style.color = 'black';
                }
                for (let i = 0; i < labels.length; i++) {
                    labels[i].style.color = 'black';
                }
                inps[key].classList.remove('error');
            }
        }
    }

    if (errorNames.length > 0) {
        alert('Error')
        console.log(errorNames);
    } else {
        console.log(user);
    }

    let blueInputValue = blueInput.value.trim();
    let redInputValue = redInput.value.trim();
    let surNameValue = surName.value.trim();
    let phoneValue = phoneNumber.value.trim();
    let favCarValue = favCar.value.trim();


    if (blueInputValue === '') {
        blueInput.classList.remove('error');
    } else {
        blueInput.classList.remove('error');
    }

    if (redInputValue === '') {
        redInput.classList.remove('error');
    } else {
        redInput.classList.remove('error');
    }

    if (surNameValue === '') {
        surName.classList.remove('error');
    } else {
        surName.classList.remove('error');
    }

    if (phoneValue === '') {
        phone.classList.remove('error');
    } else {
        phone.classList.remove('error');
    }

    if (favCarValue === '') {
        favCar.classList.remove('error')
    } else {
        favCar.classList.remove('error')
    }
}