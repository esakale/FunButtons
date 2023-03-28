const input1 = document.querySelector('.js-teksts');
const plusButton = document.querySelector('.js-plus')


const Add = (skaitlis1, skaitlis2) => {
    return skaitlis1 + skaitlis2
}

const Subtract = () => {

}

const Multiply = (skailtis1, skaitlis2) => {
    return skaitlis1 * skaitlis2
}

const Divide = (skaitlis1, skaitlis2) => {
    return skaitlis1 / skaitlis2
}

plusButton.addEventListener('click', () => {
    console.log("Mani nodpieda")
})

console.log(input1)

console.log(Add(10,5))