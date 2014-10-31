$(function() {
  console.log("Document Ready");
  Parse.initialize("Meyn2nCyKeahZsMt0ujlfG8gsv7iMhGIeNuWLsRR", "WHOdw7C4jGQM9skogwpPJXVyexHcSHlCUZBjKuMA");

  function addContact(name, email, successCb) {
    var Contact = Parse.Object.extend("Contact");
    var contact = new Contact();
    var parsePromise = contact.save({name: name, email: email})

    parsePromise.then(successCb, function(error) {
      alert("could not save record");
    });
  }

  // when the button is clicked
  // read the name and email values
  // call the addContact() with those values

  $("form").on("submit", function() {
    var contactName = $("input[name=name]").val();
    var contactEmail = $("input[name=email]").val();

    var onSuccess = function() {
      resetForm($("form")[0]);
      console.log("Booyaa");
    }

    addContact(contactName, contactEmail, onSuccess);
    return false;
  });

  function resetForm(formElement) {
    formElement.reset();
  }

});
