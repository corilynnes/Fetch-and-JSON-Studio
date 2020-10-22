window.addEventListener('load', function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) { return response.json(); }).then(function (json) {
        console.log(json);
        const container = document.querySelector('#container');
        const count = document.querySelector('#count');

        count.innerHTML = `Number of Astronauts: ${json.length}`;
        for (let i = 0; i < json.length; i++) {
            container.innerHTML += `
        <div class="astronaut">
   <div class="bio">
      <h3>${json[i].firstName} ${json[i].lastName}</h3>
      <ul>
         <li>Hours in space: ${json[i].hoursInSpace}</li>
         <li class = "active" >Active: ${json[i].active}</li>
         <li>Skills: ${json[i].skills}</li>
      </ul>
   </div>
   <img class="avatar" src="${json[i].picture}">
</div>
     `;
        };
        
    });

});