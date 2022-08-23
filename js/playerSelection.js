
   //Selecting Palyers 

   const cart = [];
   // products-cart
   
   function displayPlayers()
   {
     
       const totalSelectedPlayers = document.getElementById("total-selected-player");
       totalSelectedPlayers.innerText = cart.length;
        
    //    Error Handling 
        if(cart.length >= 6){
            alert("You Cannot Select More than Five player")
            return
        }

       const cartContainer = document.getElementById("players-cart");
       cartContainer.textContent = '';
   
       for(let i = 0; i < cart.length; i++)
        
       
       {

          const tr = document.createElement("tr");
           tr.innerHTML = `
           <th>${i+1}</th>
           <td>${cart[i].playerName}</td>
           <td>${cart[i].playerRole }</td>
           `;
           cartContainer.appendChild(tr);
           
          
       }
       
      
   }
   
   
   function addToCart(element) {
       const playerName = element.parentNode.parentNode.children[0].innerText;
       const playerRole = element.parentNode.parentNode.children[1].innerText;
       const pd = {
        playerName: playerName,
        playerRole: playerRole
       }
       cart.push(pd);
       displayPlayers();
       element.disabled = true; 
 
    }

  
 