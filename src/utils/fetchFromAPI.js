import axios from "axios";
const URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    url: URL,
    params: {maxResults: "50"},
    headers: {
      'X-RapidAPI-Key': "8fa839d025msh335aa5a71076a1ap1664d3jsn22f29d099233",
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI = async(url) => {
    const {data} = await axios.get(`${URL}/${url}`, options);
    return data;
}