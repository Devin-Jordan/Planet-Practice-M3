// fetch('/planets/planets.json').then(function(response) {
//    response.json().then(function(info) {
//       const changedDiv = document.querySelector("#destination");
//       let index = 0;
//       changedDiv.addEventListener("click", function() {
//          changedDiv.innerHTML = `
//             <div>
//                <h3>Planet ${info[index].name}</h3>
//                <img src=${info[index].image} height=250></img>
//            </div>
//         `;

//         if (index < info.length - 1) {
//          index++
//         }
//         else {
//          index = 0;
//         }
//       }) 
//    })
// })
   

fetch('../planets/planets.json').then(function(response) {
   response.json().then(function(planetInfo) {
      // array of planet objs
      const planetInfoDiv = document.querySelector('#destination');
      let i = 0;
      planetInfoDiv.addEventListener('click', function() {
         planetInfoDiv.innerHTML = `
         <div>
            <h3>Planet ${planetInfo[i].name}</h3>
            <img src=${planetInfo[i].image} height=300px></img>
         </div>`;

         if (i < planetInfo.length - 1) {
            i++;
         } else {
            i = 0;
         }
      })
   })
})