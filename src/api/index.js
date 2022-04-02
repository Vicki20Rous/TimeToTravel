import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const options = {
    method: 'GET',
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': '22539d0047mshaba23ae76c1a0c3p1d7388jsn5281cea1a33d'
    }
};

export const getPlacesData = async () => {
    try {
      const { data: { data }} = await axios.get(URL, options);

        return data;
    } catch (error) {
        console.log(error)
    }
}