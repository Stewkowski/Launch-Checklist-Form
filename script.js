// Write your JavaScript code here!




window.addEventListener("load", function() {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         let destination = document.getElementById("missionTarget");
         let index = Number(Math.floor(Math.random()*json.length));
         destination.innerHTML = 
         `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">`
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value ==="") {
         alert("All fields are required!");
      }else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) || !isNaN(pilotName.value) || !isNaN(copilotName.value)) {
         alert("Make sure to enter valid information for each field!");
      }else{
         let faultyItems = document.getElementById("faultyItems");
         let launchStatus = document.getElementById("launchStatus");
         faultyItems.style.visibility = "visible"
         
         if (fuelLevel.value < 10000 && cargoMass.value < 10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch.`
         } 
         else if (fuelLevel.value < 10000 && cargoMass.value >10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch.`
         }
         else if (fuelLevel.value > 10000 && cargoMass.value >10000){
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`
            document.getElementById("fuelStatus").innerHTML = `Sufficient fuel for launch.`
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch.`
         }
         else {
            faultyItems.style.visibility = "visible";
            launchStatus.style.color = "Green";
            launchStatus.innerHTML = "Shuttle ready for launch"
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value} is ready for launch.`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`
            document.getElementById("fuelStatus").innerHTML = `Sufficient fuel for launch.`
            document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch.`
         } 
      }

   });

});




