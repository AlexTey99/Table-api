const generatorDiv = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(data => {
      //console.log(data.results[0].id);
      //console.log(data.results[0].name);
      for (let i = 0; i < data.results.length; i++){
        let result = data.results[i];

        const elementId = `<div Class="elementDiv">${result.id}</div>`
        const elementName = `<div Class="elementDiv">${result.name}</div>`
        const elementStatus = `<div Class="elementDiv">${result.status}</div>`
        const elementSpecies = `<div Class="elementDiv">${result.species}</div>`
        const elementGender = `<div Class="elementDiv">${result.gender}</div>`

        document.getElementById('columId').innerHTML += elementId;
        document.getElementById('columName').innerHTML += elementName;
        document.getElementById('columStatus').innerHTML += elementStatus;
        document.getElementById('columSpecies').innerHTML += elementSpecies;
        document.getElementById('columGender').innerHTML += elementGender;
      }

    
      
      
    })
    .catch(error => {
      console.log('Error: ' + error);
    });
}

// Llama a la función para generar la div
generatorDiv();








