import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {

    try {
      const { data: { data }} = await axios.get(URL, {
        params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lat,
        },
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '0cfe0c7235mshc5aecb6a99e122ep1f8388jsn36c78b2d3fd0'
        }
    });
        return data;
    } catch (error) {
        console.log(error)
    }
}