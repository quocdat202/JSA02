

// const btn = document.getElementById("btn-submit")
// btn.addEventListener("click", getValue)

// function getValue(event) {
//     event.preventDefault();
//     var valueEmail = document.getElementById("email").value
//     var valueMessage = document.getElementById("message").value
//     var valueName = document.getElementById("ten").value
//     console.log("getValue ~ valueEmail:", valueEmail)
//     console.log(" getValue ~ valueMessage:", valueMessage)
//     console.log(" getValue ~ valueName:", valueName)
//     window.location.href = "index.html"
// }

// document.getElementById("btn-submit").addEventListener("click", function () {
//     const ten = document.getElementById("ten").value;
//     const email = "quocdat732@gmail.com";
//     const message = document.getElementById("message").value;
//     const mailtoLink = `mailto:${email}?subject=Chủ đề email&body=Mật khẩu của bạn là: ${message}`;

//     window.location.href = mailtoLink;
// });

// let data = [
//     {
//         id: 1,
//         namePro: "Bàn",
//         image: "image/ban_img.png",
//         dateCreated: "10/11/2023",
//     },
//     {
//         id: 2,
//         namePro: "Ghế",
//         image: "image/ghe_img.png",
//         dateCreated: "03/11/2023",
//     },
//     {
//         id: 3,
//         namePro: "Đèn",
//         image: "image/den_img.png",
//         dateCreated: "10/01/2023",
//     },
//     {
//         id: 4,
//         namePro: "Tủ",
//         image: "image/tu_img.png",
//         dateCreated: "23/11/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 5,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     },
//     {
//         id: 6,
//         namePro: "Laptop",
//         image: "image/laptop_img.png",
//         dateCreated: "09/09/2023",
//     }

// ];
// let htmlString = '';

// for (let i = 0; i < data.length; i++) {
//     htmlString += `
//     <div class="item-pro">
//         <p class="title">${data[i].namePro}</p>
//         <img src="${data[i].image}" alt="${data[i].namePro}">
//         <p class="date">${data[i].dateCreated}</p>
//         <button data-id="${data[i].id}" class="btn-buy">Thêm vào giỏ hàng</button>
//     </div>
//     `;
// }
// document.getElementById('products-container').innerHTML = htmlString;
// const btnOrder = document.getElementsByClassName('btn-buy');

// for (let button of btnOrder) {
//     console.log("🤔🤔🤔 ~ file: index.js:123 ~ button:", button)
//     button.addEventListener('click', addToCart);
// }

// function addToCart(event) {
//     // localStorage.setItem('cartUser', JSON.parse())
//     let productId = event.target.getAttribute('data-id');
//     console.log("🤔🤔🤔 ~ file: index.js:130 ~ addToCart ~ productId:", productId)
// }

// let newData = data.filter((item) => item.namePro ===)

// let account = [
//     {
//         id: 1,
//         email: 'admin@gmail.com',
//         password: 'admin',
//     },
//     {
//         id: 2,
//         email: 'quocdat@gmail.com',
//         password: '123',
//     }
// ]
// localStorage.setItem('account', JSON.stringify(account))




let dataUser = JSON.parse(localStorage.getItem('account')) // đọc dữ liệu tài khoản dưới localStorage 

function checkEmail(email, password, type) {
    console.log("🤔🤔🤔 ~ file: index.js:155 ~ checkEmail ~ email, password, type:", email, password, type)
    let exists = false;

    for (let i = 0; i < dataUser.length; i++) {
        if (email === dataUser[i].email) {
            if (type === 'login') {
                // Nếu loại là 'login', kiểm tra cả password
                if (password === dataUser[i].password) {
                    exists = true;
                }
            } else {
                console.log("🤔🤔🤔 ~ file: index.js:161 ~ checkEmail ~ type:", type)
                // Nếu loại không phải 'login', chỉ cần kiểm tra email
                exists = true;
            }

            // Dừng vòng lặp vì đã tìm thấy email khớp
            return exists
        }
    }

    return exists;
}



function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('exampleInputEmail1').value;
    let valuePassword = document.getElementById('exampleInputPassword1').value;
    let valueConfPassword = document.getElementById('exampleInputPassword2').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail)) {
            alert('Email already exists')
        } else {
            if (valuePassword === valueConfPassword) {
                dataUser.push({ id: dataUser.length + 1, email: valueEmail, password: valuePassword })
                localStorage.setItem('account', JSON.stringify(dataUser))
                alert('Register success') // ngược lại thông báo email hợp lệ
            } else {
                alert('Confirm Password fail') // ngược lại thông báo email hợp lệ
            }
        }
    } else {
        alert('Please enter your email and password')
    }
}


function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('emailLogin').value;
    let valuePassword = document.getElementById('passwordLogin').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            alert('Login successful')
            window.location.href = 'theBand.html'
        } else {
            alert('Account not found')
        }
    } else {
        alert('Please enter email and password')
    }
}
// localStorage.setItem('account', JSON.stringify(account))


// function register() {
//     event.preventDefault();
//     const userName = document.getElementById("ten").value;
//     const pass = document.getElementById("email").value;

//     if (userName === '' || pass === '') {
//         return alert("fill form")
//     } else {
//         let newAcc = {
//             id: userName + "_" + pass,
//             userName: userName,
//             password: pass
//         }
//         console.log("🤔🤔🤔 ~ file: index.js:163 ~ register ~ newAcc:", newAcc)
//         localStorage.setItem('account', JSON.stringify(newAcc))
//     }
// }

// document.getElementById('btn-submit').addEventListener('click', register)


// let n = 6;
// let m = 5;
// // staircase(n)
// staircase2(m)
// function staircase(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = ''
//         for (let j = 1; j <= n - i; j++) {
//             row += ' '
//         }

//         for (let k = n - i; k < n; k++) {
//             row += '#'
//         }


//         console.log('row', row);
//     }
// }

// function staircase2(m) {
//     for (let i = 1; i <= m; i++) {
//         let row = ''
//         for (let j = 1; j <= m - i; j++) {
//             row += ' '
//         }

//         for (let k = 1; k <= 2 * i - 1; k++) {
//             row += '*'
//         }

//         console.log(row);
//     }
// }

// let arr = [5, 5, 5, 5];

// console.log("🤔🤔🤔 ~ file: index.js:209 ~ miniMaxSum:", miniMaxSum(arr))
// function miniMaxSum(arr) {
//     // Write your code here
//     let kqSum = 0;
//     let kqTru = 0;
//     let min = arr[0];
//     let max = 0;

//     let checkEqual = arr.every((item) => item === arr[0])

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     let kq = '';
//     if (checkEqual) {
//         for (let i = 0; i < arr.length - 1; i++) {
//             kqSum += arr[i]
//             kqTru += arr[i]
//         }
//     } else {
//         kqSum = arr.filter((item) => item !== max).reduce((acc, item) => acc + item, 0);
//         kqTru = arr.filter((item) => item !== min).reduce((acc, item) => acc + item, 0);
//     }

//     kq += `${kqSum} ${kqTru}`
//     return kq
// }


// let arr = [3, 2, 1, 3];

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// let newArr = arr.filter((item) => item === max);
// console.log("🤔🤔🤔 ~ file: index.js:253 ~ newArr:", newArr.length)



