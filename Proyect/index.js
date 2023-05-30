document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "xAVejscFZnllSrIt89KWT908e2gkyr0emNFrjGJJ4d2vnUjOUP";
  const apiSecret = "qaZhUXein2fQzgij4btBWUyu8kiBqTqdaO2Ladlg";

  // Obtener token de acceso
  fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`,
  })
    .then((response) => response.json())
    .then((data) => {
      const accessToken = data.access_token;

      // Realizar solicitud GET a la API de Petfinder utilizando el token de acceso
      fetch("https://api.petfinder.com/v2/animals", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const animals = data.animals.slice(0, 5); // Obtener los primeros 5 animales
          const cardsContainer = document.getElementById("animal-cards-container");
          cardsContainer.classList.add("card-container");

          // Generar las cards para cada animal
          animals.forEach((animal) => {
            if (animal.photos.length > 0) {
              const card = document.createElement("div");
              card.classList.add("card");

              const image = document.createElement("img");
              image.src = animal.photos[0].medium;
              image.alt = animal.name;
              card.appendChild(image);

              const name = document.createElement("h5");
              name.textContent = animal.name;
              card.appendChild(name);

              const age = document.createElement("span");
              age.textContent = `Edad: ${animal.age}`;
              card.appendChild(age);

              cardsContainer.appendChild(card);
            }
          });
        })
        .catch((error) => {
          // Manejo de errores
          console.error(error);
        });
    })
    .catch((error) => {
      // Manejo de errores
      console.error(error);
    });
});
