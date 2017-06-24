$( document ).ready(function() {
  $("#search").click(function(event) {
    event.preventDefault();
    var gemSearch = $("form input").val();
    $(".request-output").remove();

  // To access each dependencies
  // data.dependencies.development.forEach(function(element) {
  //   console.log(element.name);
  // });
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://rubygems.org/api/v1/gems/" + gemSearch + ".json",

      success: function (data) {
        var gemName = data.name;
        var gemDescription = data.info;
        var gemLink = data.gem_uri;
        var gemDepencies = [];

        if (data.dependencies.development !== 0) {
          data.dependencies.development.forEach(function(element) {
            gemDepencies.push(element.name);
          });
        }

      },
      error: function (error) {
      }
    })
    .fail(function() {
      $(".gem-information").append("<div class='request-output'><p>Oh no! Looks like that gem can't be found.</p></div>");
    });
  });
});
