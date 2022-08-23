//Selcting Players : 
var sakib = {
    playerName: "Shakib Al Hasan",
    imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/08/1628597181_shakib-al-hasan.jpg",
    ranking: 1,
    description:
        "All Rounder",
};

var mashrafee = {
    playerName: "Mashrafee",
    imageUrl:
        "https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Mashrafe-Mortaza-CWC19.ashx",
    ranking: 1,
    description:
        "Medium Fast Boller",
};
var pollard = {
    playerName: "Kiran Pollard",
    imageUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320100/320107.png",
    ranking: 5,
    description:
        "All Rounder",
};
var musfiqur = {
    playerName: "Musfiqur Rahman",
    imageUrl:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170916/mushfiqur-rahim.jpg",
    ranking: 5,
    description:
        "Wicket Keeper Batsman",
};
var rubel = {
    playerName: "Ruble Hossain",
    imageUrl:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_800,q_50/lsci/db/PICTURES/CMS/291600/291610.jpg",
    ranking: 12,
    description:
        "Boller",
};
var sunilNarine = {
    playerName: "Sunil Narine",
    imageUrl:
        "https://st3.cricketcountry.com/wp-content/uploads/cricket/20140522042106.jpeg",
    ranking: 3,
    description:
        "All Rounder",
}


        
  // farePerKilo -> per kilometer cost for hiring the vehicle
  
  
  
  
  const playerArray=[mashrafee,pollard, sakib, musfiqur,rubel,sunilNarine]
  
  
  function displayPlayers(player) {
    const playerSection = document.getElementById("player-section");
    const stringifiedObj = JSON.stringify(player);
    const div = document.createElement("div");
  
    div.innerHTML = `
    <div class="card bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src=${player.imageUrl} alt="Shoes" class="rounded-xl h-40"/>
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${player.playerName}</h2>
      <p>${player.description}  </p>
      <p class="text-zinc-400">ICC Ranking: ${player.ranking}</p>
      <div class="card-actions">
      
      <button id="button" class="btn btn-primary" onclick="addToCart(this)" >Select</button>
   
      
      </div>
    </div>
  </div>
  `;
  
    playerSection.appendChild(div);
  }
  
   
   function displayAllArticles(arr) {
     
     
      for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          displayPlayers(element);
      }
  
   }
   displayAllArticles(playerArray)
  