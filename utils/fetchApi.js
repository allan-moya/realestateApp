import axios from 'axios'
export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ad4cfc3d0dmshe6123a56319ba72p1a306cjsnc87dd408886d'
        },
    });
    return data;

}