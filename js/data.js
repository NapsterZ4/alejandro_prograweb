function sendData(){
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let data = {
    "name": name,
    "username": username,
    "password": password
  }

  let header = new Headers();
  debugger;
  console.log(header);

  let res = fetch("http://161.35.225.72:8000/v1/webform/", {
    method: 'POST',
    body: JSON.stringify(data),
    mode: "cors",
    headers: header,
  }).then(function (response){
    if (response.ok){
      console.log("Successfully!!!");
    } else {
      console.log(response);
    }
  })

  console.log(res);
}
