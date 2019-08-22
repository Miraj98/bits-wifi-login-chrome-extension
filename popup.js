// let changeColor = document.getElementById('changeColor');
const submitButton = document.getElementById('submit').addEventListener('click', () => {
  let username = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  if(username.length === 0 || password.length === 0) return;
  else {
    chrome.storage.sync.set({ username, password }, () => {
      alert("New username and password set for WiFi successfully :)");
    })
  }
})

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });