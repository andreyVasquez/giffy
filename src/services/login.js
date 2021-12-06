const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

export default async function login({ username, password }) {
    return await fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        const { jwt } = res
        return jwt
    })
}