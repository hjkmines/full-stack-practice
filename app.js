const dogs = [{            //step 5
  name: "Bixby"
}, {
  name: "Snoopy"
}, {
  name: "Marty"
}]

const $dogs = dogs.map( dog => {    //turn into elements 
  const $li = document.createElement("li"); 
  $li.textContent = dog.name; 
  return $li; 
})

const $ul = document.querySelector(".dogs")

$dogs.forEach($dog => { //step 6
  $ul.append($dog); 
})
