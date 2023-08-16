const addForm = document["add-form"]
const subForm = document["sub-form"]
const multForm = document["mult-form"]


addForm.addEventListener("submit", function (e){
    e.preventDefault()
    const num1 = Number (addForm.add1.value)
    const num2 = Number (addForm.add2.value)

    num1.value = ""
    num2.value = ""

    const sum = num1 + num2
    const display = num1 + "+" + num2 + "=" + sum

    const h2 = document.createElement ("h2")
    h2.textContent = display
    document.body.append(h2)

})

subForm.addEventListener("submit", function (e){
    e.preventDefault()
    const diff1 = Number (subForm.sub1.value)
    const diff2 = Number (subForm.sub2.value)

    diff1.value = ""
    diff2.value = ""

    const difference = diff1 - diff2
    const display = diff1 + "-" + diff2 + "=" + difference

    const h2 = document.createElement ('h2')
    h2.textContent = display
    document.body.append(h2)

})


multForm.addEventListener("submit", function (e){
    e.preventDefault()
    const multi1 = Number (multForm.mult1.value)
    const multi2 = Number (multForm.mult2.value)

    multi1.value = ""
    multi2.value = ""

    const quotient = multi1 * multi2
    const display = multi1 + "*" + multi2 + "=" + quotient 

    const h2 = document.createElement ('h2')
    h2.textContent = display
    document.body.append(h2)

})