import axios from "axios"

export const fetchPictures = async (q) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${q}&page=1&key=38922670-691cd2065c98d9555aa737c91&image_type=photo&orientation=horizontal&per_page=12`);
    return data;
}

export const fetchPicturesMore = async (q, page) => {
    const { data } = await axios.get(`https://pixabay.com/api/?q=${q}&page=${page}&key=38922670-691cd2065c98d9555aa737c91&image_type=photo&orientation=horizontal&per_page=12`);
    console.log(page)
    return data;
}