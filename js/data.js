async function sendData(){
  let name = document.getElementById("name").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let data = {
    "name": name,
    "username": username,
    "password": password
  }

  let header = new Headers();

  // let header = {
  //   "Accept": "*/*",
  //   "Content-Length": "5",
  //   "Host": "61.35.225.72:8000",
  // }
  // let request = new Request("http://127.0.0.1:8000/v1/webform/");

  const res = await fetch("http://161.35.225.72/api/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {},
    mode: "cors"
  }).then(function (response) {
    if (response.ok) {
      console.log("Successfully!!!");
    } else {
      console.log(response);
    }
  })

  const content = await res.json();
  console.log(content);
}
