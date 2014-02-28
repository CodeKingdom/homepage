window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var proposalBody = document.getElementById("proposal-body").value;
    var data = {
    	"post":{
          "title": "Proposal",
          "body": name + "\n" + email + "\n" + proposalBody,
          "category-id": 98845,
          "notify": [81859]
    	}
    }
    var key = "rugby645beer";

    XHR.open("POST", "http://codekingdom.teamwork.com/projects/79334/posts.json");

    XHR.setRequestHeader("Authorization", "BASIC " + window.btoa(key + ":xxx"))

    XHR.send(JSON.stringify(data));
  }

  var form = document.getElementById("proposal-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("proposal-body").value = "";
  });
});
