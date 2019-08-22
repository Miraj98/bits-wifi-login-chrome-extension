let username;
let password;

chrome.storage.sync.get('username', data => {
  username = data.username;
  document.getElementById('username').value = username;
  chrome.storage.sync.get('password', data => {
    password = data.password;
    document.getElementById('password').value = password;
    const anchorTags = document.getElementsByTagName('a');
    anchorTags[1].click();
  });
});

