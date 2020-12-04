// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    
    var newBurger = $("#enter_text").val().trim();

    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "POST",
      data: {name:newBurger}
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).find(".burger_id").val();
    // Send the POST request.
    $.ajax("/api/burgers/"+id, {
      type: "PUT",
      data: {devoured:1}
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
