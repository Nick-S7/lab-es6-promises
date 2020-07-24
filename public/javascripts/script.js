// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
//for (let i = 0; i < mashPotatoes.length; i++) {
//  //addFood(steak[i], '#steak');
//  console.log(mashPotatoes[i])
//}

// Iteration 1 using callbacks
const steakPromise = new Promise((resolve) =>{
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
                document.getElementById("table").innerHTML += '';
              }).then(() => {
                resolve();
              })
              })
            })
          })
        })
      })
    })
  })
})

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() =>{
    addFood(mashPotatoes[2], '#mashPotatoes').then(() =>{
      addFood(mashPotatoes[3], '#mashPotatoes').then(() =>{
        addFood(mashPotatoes[4], '#mashPotatoes').then(() =>{
          document.getElementById("table").innerHTML += 
          '<img src ="./public/images/mashedPotatoes.jpg">'   
        })
        .then(() =>{
          resolve();
        })
      })
    })
  })
});

// Iteration 3 using async and await
    // ... your code here
    const brusselsPromise = new Promise((resolve) => {
      async function makeFood(){
        for (let i = 0; i < brusselSprouts.length; i++){
          await addFood(brusselSprouts[i], '#brusselSprouts');
        
        }
         resolve()
      }
         makeFood();
    })



