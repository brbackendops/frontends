import axios from "axios";

async function make_rqst(term){
    const url = `https://api.unsplash.com/search/photos?query=${term}&client_id=rH_RTpWUiB7iK6uItFuPBFkaHlE_FJZqIseF87d33lg&per_page=15`;
    let response = await axios.get(url);
    return response.data
}

export default make_rqst;