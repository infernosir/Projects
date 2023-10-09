let number = Math.floor(Math.random() * 100) + 1;
let score;
let chance = 0;
while (number){
let a = prompt("Guess the number between 1-100") 
 
if (a == number){
    console.log("Congratulations your guess is correct")
}
else if (a>number){
    console.log("Your number is greater than actual number")
    chance++;
}
else if (a<number){
    console.log("Your number is less than actual number")
    chance++;
}
score = 100-chance;
}
console.log("Your score is", score)
console.log("The number is", number)

