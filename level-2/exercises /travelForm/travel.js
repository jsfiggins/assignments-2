const form = document["travel-form"]
 
form.addEventListener("submit", function(e){
    e.preventDefault()
    const name = form["cust-name"].value
    const age = form.age.value
    const gender= form.gender.value
    const destination = form.destination.value
    const custDiet = []
    
    for(var i = 0;i<form.diet.length; i++){
        if (form.diet[i].checked){
            custDiet.push(form.diet[i].value)
        }
    }
let traveler =(`Name: ${name}
Age: ${age} 
Gender: ${gender} 
Destination: ${destination}
Diet Restrictions: ${custDiet} `)
alert(traveler)
})
