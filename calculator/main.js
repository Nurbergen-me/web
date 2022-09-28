// const f1s = document.querySelectorAll('input[name="f1"]');
//
//
// for(const f1 of f1s) {
//     f1.addEventListener('change', (e) => {
//         console.log(e.target.value);
//     })
// }


document.querySelector('input[name="f1"]:checked')?.
    addEventListener('change', (e) => {
    console.log(e);
})