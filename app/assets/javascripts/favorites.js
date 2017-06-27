$( document ).ready(function() {

  $( document ).ajaxComplete(function() {

    $(".star").click(function(event) {
      event.preventDefault();

      var gemName = $(this).prev().text();
      var gemLink = $(this).prev().attr("href");

      if (localStorage[gemName] === undefined) {
        localStorage[gemName] = gemLink;
      }
      else {
        localStorage.removeItem(gemName);
      }
    });

  });

});
