//Fortune teller
function tellFortune(X,Y,Z,N){
    console.log("\"You will be a "+ X +" in " + Y + ", "+ "and married to " + Z +" with "+ N+" kids.\"");
}
tellFortune("Scientist","USA","John",2)
tellFortune("Doctor","India","Bob",2)
tellFortune("Teacher","Canada","Mary",3)
tellFortune("Professor","Japan","Sam",1)

//Puppy age calculator
function calculateDogAge(hy){
    var NN=hy*7
    console.log("Your doggie is " +NN+ " years old in dog years!")
}
for(var i=1; i<4;i++){
    calculateDogAge(i)
}
//Puppy age calculator with 2 parameters
function calculateDogAgeWithHumanAge(hy,range){
    var NN=hy*range
    console.log(`Your doggie is ${NN} years old in dog years!`)
}
for(var i=1; i<4;i++){
    calculateDogAgeWithHumanAge(i,i+1)
}

//Lifetime supply calculator
function calculateSupply(age,amount){
    var totalAmount=(age*amount*365).toFixed();
    console.log(`You will need ${totalAmount} to last you until the ripe old age of ${age}`)
}
calculateSupply(70,2)
calculateSupply(65,3.14)
calculateSupply(76,4.78)

//The Geometrizer
function calcCircumference(radius){
    var circum=2*3.14*radius
    console.log(`The circumference is ${circum}`)
}
function calcArea(radius){
    var area=3.14*radius*radius
    console.log(`The area is ${area}`)
}
calcCircumference(4)
calcArea(5)

//The Temperature convertor
function celsiusToFahrenheit(cel){
    var farenheit=(cel*9/5) +32
    console.log(`${cel} C is ${farenheit} F`)
}
function fahrenheitToCelsius(faren){
    var celsius=5/9*(faren-32)
    console.log(`${faren} F is ${celsius} C`)
}
celsiusToFahrenheit(20)
fahrenheitToCelsius(68)

