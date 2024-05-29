// your code here
document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault();
  let name = document.querySelector("#name").value;
	let age = document.querySelector("#year").value;
  let qry = `https://localhost:8080/?name=${name}&year=${age}`
  // update h3 text
	let head = document.querySelector("#url");
	head.innerText = qry;
});