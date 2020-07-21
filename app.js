// const dogs = [{            //step 5
//   name: "Bixby"
// }, {
//   name: "Snoopy"
// }, {
//   name: "Marty"
// }]

// const $dogs = dogs.map( dog => {    //turn into elements 
//   const $li = document.createElement("li"); 
//   $li.textContent = dog.name; 
//   return $li; 
// })

// const $ul = document.querySelector(".dogs")

// $dogs.forEach($dog => { //step 6
//   $ul.append($dog); 
// })


fetch("http://localhost:3000/dogs")   //step 17-19
  .then(response => response.json())
  .then(response => createElements(dogs))
  .then($dogs => addToList($dogs))

  function createElement(dogs) {
    const $dogs = dogs.map( dog => {   
      const $li = document.createElement("li"); 
      $li.textContent = dog.name; 
      return $li; 
    })
    return $dogs; 
  }

  function addToList($dogs) {
    const $ul = document.querySelector(".dogs")
    $dogs.forEach($dog => { 
      $ul.append($dog); 
    } )
    return $ul; 
  }

const $ul = document.querySelector("ul")

fetch("http://localhost:3000/dogs")
  .then(response => response.json())
  .then(parsedResponse => response() {
    const pokemons = response.data; 
    pokemons.map(pokemon => {
      const $li = document.createElement('li'); 
      $li.innerHTML = `<a href="www.google.com>${pokemon}</a>`
      return $li 
    }).forEach($li => {
      $ul.append($li)
    })
  }
    
    
    
    
    
    
    )