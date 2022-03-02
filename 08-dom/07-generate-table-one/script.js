// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    
    document.getElementById('target');

      //Création de l'élément <table> et <tbody>
      var table = document.createElement("table");
      var tableBody = document.createElement("tbody");
    
      // Création des ligne + colonnes
      for (var i = 0; i < 10; i++) {

        // creates d'une seule ligne (le reste se créera avec la boucle)
        var row = document.createElement("tr");
    
        for (var j = 0; j < 1; j++) {

          // Création de la colonne
          var bloc = document.createElement("td");
          // Création de la "case" + écriture
          var blocText = document.createTextNode("Ligne "+i);

          // Place "blocText" (les contenues du bloc) dans les "bloc"
          bloc.appendChild(blocText);

          // Place les bloc dans les lignes
          row.appendChild(bloc);
        }
    
        tableBody.appendChild(row);
      }
    
      // Place <tbody> dans <table>
      table.appendChild(tableBody);
      
      // Place <table> dans "target"
      target.appendChild(table);
})();
