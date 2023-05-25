 let inp = document.querySelector('.form-control');

 let btn = document.querySelector('.btn');

 btn.onclick = () => {
    
    let inputValueOne = inp[0].value
    let inputValueTwo = inp[1].value
    let obj = { name: inputValueOne, lastname: inputValueTwo }

    fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => {
        res.status === 201 ? alert('Succes') : alert('error')
        inp[0].value = ''
        inp[1].value = ''
    })

 }

// let inp = document.querySelectorAll('.form-control')
// let btn = document.querySelector('.btn')


// btn.onclick = () => {
//     console.log(inp);
//   let inputValueOne = inp[0].value
//   let inputValueTwo = inp[1].value
//   let obj = { name: inputValueOne, lastname: inputValueTwo }

//   fetch('http://localhost:3000/data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(obj)
//   }).then(res => {
//     res.status === 201 ? alert('Succes') : alert('error')
//     inp[0].value = ''
//     inp[1].value = ''
//   })
// }

