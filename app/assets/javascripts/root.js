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
        console.log(data.name);
        console.log(data.info);
        console.log(data.gem_uri);
        console.log(data.dependencies.development[0].name); // Make sure to deal with edge case of it being empty
      },
      error: function (error) {
      }
    })
    .fail(function() {
      $(".gem-information").append("<div class='request-output'><p>Oh no! Looks like that gem can't be found.</p></div>");
    });
  });
});
