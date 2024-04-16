const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){

  console.log(button)

  button.addEventListener('click',function(e){

    console.log(e);

     // it shows about the event which is pointer event(mouse pointer)nand their prototypes as well.
    console.log(e.target)
    
      // e.target shows about the element which is targeted to hold the event

      ///+++++++  if else  +++++++++++=

     if (e.target.id === 'grey')

     body.style.backgroundColor = "red"

     if (e.target.id === 'white')

     body.style.backgroundColor = "blue"

     if (e.target.id === 'blue')

     body.style.backgroundColor = "pink"

     if (e.target.id === 'yellow')

      body.style.backgroundColor = "green"
    

    //+++++++++++++   switch case  +++++++++++++


     switch (e.target.id){
      case "grey":
      body.style.backgroundColor = "red";
      break;

      case "white":
      body.style.backgroundColor = "blue";
      break;

      case "blue":
      body.style.backgroundColor = "red";
      break;

      case "yellow":
      body.style.backgroundColor = "blue";
      break;

     }

  })

})