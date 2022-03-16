// Ecouter l'evenement submit et declacher une alert formulaire envoyé + la requete AJAX
document.getElementById("inscription").addEventListener("submit", function (e) {
  e.preventDefault();
  var erreur;

  if (erreur) {
    return false;
  } else {
    $.ajax({
      method: "POST",
      url: "create_group.php",
      data: {
        Id: document.getElementById("ID").value,
        Nom: document.getElementById("NAME").value,
        TelClient1: document.getElementById("TEL1").value,
        TelClient2: document.getElementById("TEL2").value,
        TelEcoute: document.getElementById("ECOUTE").value,
        TelGeneral: document.getElementById("GENERAL").value,
      },
    }).done(function (msg) {
      alert("Data Sauvegardé: " + msg);
    });
    alert("Formulaire envoyé !");
  }
});

// DataTable
$("#table_id").DataTable({});
