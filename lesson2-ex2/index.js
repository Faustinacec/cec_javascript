// while loop
let x = 0;
while(x <= 10){
    console.log(x);
    x = x + 1;
}

// do-while loop
let i = 0;
do{
    console.log(i);
    i = i + 1;
}while(i <= 7);

//for loop
for(let j = 0; j<= 5; j++){
    console.log(j);
}

// for...in loop 
let snake = {
    color: "green",
    length: 25,
    name: 'Harry'
}
for (let prop in snake){
    console.log('prop', prop);
    console.log('snake[prop]', snake[prop]);
}
