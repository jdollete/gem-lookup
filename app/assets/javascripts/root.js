$( document ).ready(function() {
  $("#submit-button").click(function(event) {
    event.preventDefault();

    var gemSearch = $("form input").val().toLowerCase();

    $(".request-output").remove();
    $("#search-field, #submit-button").removeClass("not-found-field");

    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://rubygems.org/api/v1/gems/" + gemSearch + ".json",

      success: function (data) {
        var gemName = data.name;
        var gemDescription = data.info;
        var gemLink = data.project_uri;
        var gemDepencies = [];

        function appendDependencies() {
          if (gemDepencies.length !== 0) {
            gemDepencies.forEach(function(element) {
              $(".dependencies").append("<p>" + element + "</p>");
            });
          }

          else {
            $(".dependencies").append("<p>None</p>");
          }
        }

        if (data.dependencies.development.length !== 0) {
          data.dependencies.development.forEach(function(element) {
            gemDepencies.push(element.name);
          });
        }

        $(".gem-information").append("<div class='request-output'><div class='gem-name'><a href=" + gemLink + " target='_blank'>" + gemName + "</a></div><div class='gem-information'><div><p>INFORMATION</p></div><div>" + gemDescription + "</div></div><div class='dependencies'><p>DEPENDENCIES<p></div></div>");

        appendDependencies();

      },
      error: function (error) {
      }
    })
    .fail(function() {
      $(".gem-information").append("<div class='request-output not-found'><p>Oh no! Looks like that gem can't be found.</p></div>");
      $("#search-field, #submit-button").addClass("not-found-field");
    });
  });
});
