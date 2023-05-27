const apiKey = "xAVejscFZnllSrIt89KWT908e2gkyr0emNFrjGJJ4d2vnUjOUP";
const apiSecret = "qaZhUXein2fQzgij4btBWUyu8kiBqTqdaO2Ladlg";

document.getElementById("obtener-informacion").addEventListener("click", () => {
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
          // Aquí puedes trabajar con los datos devueltos por la API
          console.log(data);
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
