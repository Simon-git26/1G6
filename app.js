function formAjax(res) {
  // Ecouter l'evenement submit et declacher une alert formulaire envoyé + la requete AJAX

  $.ajax({
    type: "POST",
    url: "create_group.php",
    data: {
      Id: document.getElementById("ID").value,
      Nom: document.getElementById("NAME").value,
      TelClient1: document.getElementById("TEL1").value,
      TelClient2: document.getElementById("TEL2").value,
      TelEcoute: document.getElementById("ECOUTE").value,
      TelGeneral: document.getElementById("GENERAL").value,
    },
    dataType: "json",

    success: onResult,
  });
}

function onResult(response) {
  //le cham retour est === OK
  if (response.retour === "OK") {
    alert("succès");
  }

  // Le champs message === KO
  if (response.retour === "KO") {
    alert("Erreur" + response.message);
  }
}

// DataTable
$("#table_id").DataTable({});
