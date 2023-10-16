import axios from "axios";

const baseUrl = 'https://youtube-v31.p.rapidapi.com'
const options = {

    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '6b664d6d84msh6b9fad0628267cap15b34fjsn2b501501eee0',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${baseUrl}/${url}`, options)
    return data;
    
}