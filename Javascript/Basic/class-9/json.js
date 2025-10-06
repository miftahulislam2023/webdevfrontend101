//Application Programming Interface - API
let data = {
    "login": "MahirHamiAbrar",
    "id": 70753280,
    "node_id": "MDQ6VXNlcjcwNzUzMjgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/70753280?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/MahirHamiAbrar",
    "html_url": "https://github.com/MahirHamiAbrar",
    "followers_url": "https://api.github.com/users/MahirHamiAbrar/followers",
    "following_url": "https://api.github.com/users/MahirHamiAbrar/following{/other_user}",
    "gists_url": "https://api.github.com/users/MahirHamiAbrar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/MahirHamiAbrar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/MahirHamiAbrar/subscriptions",
    "organizations_url": "https://api.github.com/users/MahirHamiAbrar/orgs",
    "repos_url": "https://api.github.com/users/MahirHamiAbrar/repos",
    "events_url": "https://api.github.com/users/MahirHamiAbrar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/MahirHamiAbrar/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
}

//Object to JSON
let json = JSON.stringify(data)
console.log(json)
//JSON to object
console.log(JSON.parse(json))
