require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Piyu!')
})

app.get('/twitter', (req, res) => {
    res.send('praveen_raj027')
})
app.get('/login', (req, res) => {
    res.send('<h1>Login at this backend server</h1>')
})

const githubData = {
  "login": "praveenraj027",
  "id": 188768489,
  "node_id": "U_kgDOC0Bg6Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/188768489?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/praveenraj027",
  "html_url": "https://github.com/praveenraj027",
  "followers_url": "https://api.github.com/users/praveenraj027/followers",
  "following_url": "https://api.github.com/users/praveenraj027/following{/other_user}",
  "gists_url": "https://api.github.com/users/praveenraj027/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/praveenraj027/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/praveenraj027/subscriptions",
  "organizations_url": "https://api.github.com/users/praveenraj027/orgs",
  "repos_url": "https://api.github.com/users/praveenraj027/repos",
  "events_url": "https://api.github.com/users/praveenraj027/events{/privacy}",
  "received_events_url": "https://api.github.com/users/praveenraj027/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Praveen Rajak",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "🚀 Aspiring Frontend Developer | AI & ML Enthusiast | Skilled in React.j and JavaScript | Passionate about building web & AI solutions.",
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 5,
  "following": 7,
  "created_at": "2024-11-17T13:49:41Z",
  "updated_at": "2026-02-18T12:51:52Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})
