// js permettant de calculer le prix en fonction de l'option choisie, et remplacant les valeures affichées
$(document).ready(function () {
  $('#produit').change(function () {
    var job = $('#produit').val();
    if ($('#produit').val() == 9.99) {
      ttc = 9.99;
      $('#TTC').text(ttc + 'EUR')
      // ht = Math.round(cout*100)/100  --> calcul de valeure au centième près

      ht = Math.round((ttc - (20 * ttc / 100)) * 100) / 100;
      $('#HT').text(ht + 'EUR')
    }

    else if ($('#produit').val() == 14.99) {
      ttc = 14.99;
      $('#TTC').text(ttc + 'EUR')
      // ht = Math.round(cout*100)/100  --> calcul de valeure au centième près

      ht = Math.round((ttc - (20 * ttc / 100)) * 100) / 100;
      $('#HT').text(ht + 'EUR')
      
    }

    else if ($('#produit').val() == 19.99) {
      ttc = 19.99;
      $('#TTC').text(ttc + 'EUR')
      // ht = Math.round(cout*100)/100  --> calcul de valeure au centième près

      ht = Math.round((ttc - (20 * ttc / 100)) * 100) / 100;
      $('#HT').text(ht + 'EUR')
    }
  })
})