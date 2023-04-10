import axios from 'axios';

const HEADERS = {
    'X-RapidAPI-Key': '12f3be73camshf1df5216dc6d86cp1369b6jsn0c4222f9059e',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
}

const ENDPOINT = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const getCityInfo = async(searchText) => {
    const options = {
        method: 'GET',
        url: `${ENDPOINT}/cities`,
        headers: HEADERS,
        params: {minPopulation: 1000000, namePrefix: searchText.toLowerCase()}
    }
    return await axios.request(options);
}