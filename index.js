const app = "I don't do much.";

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits');
// xhr.responseType = 'json';

// xhr.onload = function() {
//   console.log(xhr.response);
// };

// xhr.onerror = function() {
//   console.log('Booo');
// };

// xhr.send();


const token = '5a84cf369af2ce872532a85d32757dd2654eb37a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
