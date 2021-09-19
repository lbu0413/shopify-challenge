import axios from "axios";
import formatDate from "./formatDate";

// const API_KEY = "wZ6sdAEOi88UthBmNdFFNB4RAiZclTNazxyHJ2Wi";
const API_KEY = "fR1bzhn69SocOtYn9K9eWZINncP6QsfVyDk5O1Dq";

const client = async (ISOString = formatDate(new Date())) => {
	const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${ISOString}`;
	return axios.get(url);
};

export default client;
