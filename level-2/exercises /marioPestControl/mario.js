const form = document.baddies

form.addEventListener("submit", function (e){
    e.preventDefault();
    const bobombs = form.goombas.value * 5
    const goombas = form.bobombs.value * 7
    const  cheepcheeps = form.cheepcheeps.value *11

    let sum = bobombs + goombas + cheepcheeps 

    form.totalPrice.value = sum + " Coins"
})