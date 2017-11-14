const app = "I don't do much.";

// fetch('https://api.github.com/repos/jquery/jquery/commits')
//   .then(res => res.json())
//   .then(json => console.log(json));

const token = "314343e5b147165421a89ad60b45c305c7fee82a";
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
