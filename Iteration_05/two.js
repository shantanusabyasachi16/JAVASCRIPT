//while loop

let index = 6
while (index<=20) {
    //console.log(`value of index:${index}`);
    index= index + 3
    
}
/*
value of index:6
value of index:9
value of index:12
value of index:15
value of index:18*/

//array in while loop

let mynewarray= ["kkr","csk","rcb"]
let index1 = 0
while (index1<mynewarray.length) {
    //console.log(`value is :${mynewarray[index1]}`);
    index1 = index1 + 1
    
}
/*
value is :kkr
value is :csk
value is :rcb*/

// do while loop

let score = 1

do {
    
    console.log(`score is:${score}`);
    score ++
} while (score<=10);
/*
score is:1
score is:2
score is:3
score is:4
score is:5
score is:6
score is:7
score is:8
score is:9
score is:10*/

//what happens if the score value is more  than the givemn condition
let score1 = 11

do {
    
    console.log(`score is:${score1}`);
    score1 ++
} while (score1<=10);
//score is:11
//it will execute beacause in do while loop the condition is checked after the work
