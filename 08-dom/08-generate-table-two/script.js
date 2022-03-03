// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    document.getElementById('target');

      //Création de l'élément <table> et <tbody>
      var table = document.createElement("table");
      var tableBody = document.createElement("tbody");
    
      let count = [];
      for (var i = 1; i < 11; i++) {
        for (var j = 1; j < 11; j++) {
            count.push(i*j);
        }
        console.log(count);        
    }
    
      // Création des ligne + colonnes
      for (var i = 0; i < 10; i++) {

      

        // creates d'une seule ligne (le reste se créera avec la boucle)
        var row = document.createElement("tr");
        let mult = 0;
        for (var j = 0; j < 10; j++) {

            
            mult++;

          // Création de la colonne
          var bloc = document.createElement("td");
          // Création de la "case" + écriture
          var blocText = document.createTextNode((count[i] * mult));

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
