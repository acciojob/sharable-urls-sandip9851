document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
  let year = document.querySelector("#year").value; // corrected this line
  let qry = `https://localhost:8080/?name=${name}&year=${year}`
  let head = document.querySelector("#url");
  head.innerText = qry;
});