import { API_KEY, API_URL } from './settings'

export default async function getGifs({ keyword = 'spiderman' } = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;
    return await fetch(apiURL)
        .then((response) => response.json())
        .then((response) => {
            const { data } = response;
            const gifs = data.map((gif) => {
                const { images, title, id } = gif;
                const { url } = images.downsized_medium;
                return { url, title, id };
            });
            return gifs;
        });
}
