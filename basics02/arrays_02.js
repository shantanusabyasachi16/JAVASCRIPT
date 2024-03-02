const marvelheros =["ironman", "spiderman", "thor"]
const dcheros= ["superman","batman","flash"]

 //marvelheros.push(dcheros)

 // console.log(marvelheros);//[ 'ironman', 'spiderman', 'thor', [ 'superman', 'batman', 'flash' ] ]
// in this output the array comes in within the array..
//It adds dcHeros as an arrays which has become a single element in marvelHeroes.
 
         //concat
// It concats the two arrays and create a new array.

//const myheros = marvelheros.concat(dcheros)
//console.log(myheros);//[ 'ironman', 'spiderman', 'thor', 'superman', 'batman', 'flash' ]
//two arrays are merged in single array.

          //spread//
          //// This is called as the spread operator , between spread and concat , spread operator is prefer to use because it can make the elements of arrays individual.
 

          const allmyheros = [...marvelheros,...dcheros]
          console.log(allmyheros);//[ 'ironman', 'spiderman', 'thor', 'superman', 'batman', 'flash' ]


          const anotherarray =[1,2,3,4.,[5,6,7],7,[8,9,[4,7]]]

           const anotherarray2 = anotherarray.flat(Infinity)
           //The flat() creates a new arrays including all the subarray and all are concatenated .
          
           console.log( anotherarray2); //[1,2,3,4,5,6,7,7,8,9,4,7]


           console.log(Array.isArray("dugu"));//false

           //to covert to array
           //it will convert all values into arrays...
           console.log(Array.from("dugu"));//[ 'd', 'u', 'g', 'u' ]

           console.log(Array.from({name:"dugu"})); // [] ,(intresting) returns an empty string because it doesnot know that should it make the "name;" keyword in a string or make the value that is "Suvam" into a string.

           let score1 = 299
           let score2 = 599
           let score3 = 799
        
           console.log( Array.of(score1,score2,score3));//[ 299, 599, 799 ]
           //the .of() method makea a combination of muliple arrays into a new arry.