$( document ).ready(function() {
  $("#search").click(function(event) {
    event.preventDefault();
    var gemSearch = $("form input").val();

  // To access each dependencies
  // data.dependencies.development.forEach(function(element) {
  //   console.log(element.name);
  // });
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "https://rubygems.org/api/v1/gems/" + gemSearch + ".json",

      success: function (data) {
        debugger;
        console.log(data.name);
        console.log(data.info);
        console.log(data.gem_uri);
        console.log(data.dependencies.development[0].name); // Make sure to deal with edge case of it being empty
      },
      error: function (error) {
      }
    })
    .fail(function() {
      alert("Did not find gem");
    });
  });
});
