var flags = ["Argentina","Brasil","China"];

  var select = document.getElementById("select-flags");

  for(var i = 0; i < flags.length; i++) {
    var option = document.createElement("option");
    option.value = flags[i];
    option.text = flags[i];
    select.appendChild(option);
  }