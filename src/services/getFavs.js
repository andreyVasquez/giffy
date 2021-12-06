const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

export default async function getFavs({ jwt }) {
    return await fetch(`${ENDPOINT}/favs`, {
        method: 'GET',
        headers: {
            "Authorization": jwt,
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        const { favs } = res
        return favs
    })
}