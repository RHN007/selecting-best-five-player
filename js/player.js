//Selcting Players : 
const sakib = {
    playerName: "Shakib Al Hasan",
    imageUrl:
        "https://dhakadynamites.com/images/profile/Shakib-Al-Hasan_2019-01-07_968.jpg",
    ranking: 1,
    description:
        "All Rounder",
};

const mashrafee = {
    playerName: "Mashrafee",
    imageUrl:
        "https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Mashrafe-Mortaza-CWC19.ashx",
    ranking: 1,
    description:
        "Medium Fast Boller",
};
const pollard = {
    playerName: "Kiran Pollard",
    imageUrl:
        "https://dhakadynamites.com/images/profile/Kiron-Pollard_2019-01-07_524.jpg",
    ranking: 5,
    description:
        "All Rounder",
};
const musfiqur = {
    playerName: "Musfiqur Rahman",
    imageUrl:
        "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170916/mushfiqur-rahim.jpg",
    ranking: 5,
    description:
        "Wicket Keeper Batsman",
};
const rubel = {
    playerName: "Ruble Hossain",
    imageUrl:
        "https://dhakadynamites.com/images/profile/Rubel-Hossain_2019-01-07_267.jpg",
    ranking: 12,
    description:
        "Boller",
};
const sunilNarine = {
    playerName: "Sunil Narine",
    imageUrl:
        "https://dhakadynamites.com/images/profile/Sunil-Narine_2019-01-07_457.jpg",
    ranking: 3,
    description:
        "All Rounder",
}

const litonKumar={
    playerName:'Liton Kumar Das', 
    imageUrl:'https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Liton-Das-CWC19.ashx', 
    ranking: 5, 
    description:'Batsman'
}

const nurulHassan={
    playerName:'Nurul Hasan', 
    imageUrl:'http://dhakadynamites.com/images/profile/Nurul-Hasan_2019-01-07_174.jpg', 
    ranking: 23, 
    description:'Batsman'
}

const adreRussell = {
    playerName: "Andrew Russel", 
    imageUrl: "https://dhakadynamites.com/images/profile/AD-Russell_2019-01-07_946.jpg",
    ranking: 12, 
    description: "All Rounder"
}
  // farePerKilo -> per kilometer cost for hiring the vehicle
  
  
  
  
  const playerArray=[mashrafee,pollard, sakib, musfiqur,rubel,sunilNarine,litonKumar,nurulHassan, adreRussell]
  
  
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
      
      <button  class="btn btn-primary"  onclick="addToCart(this)"  >Select</button>
   
      
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
  