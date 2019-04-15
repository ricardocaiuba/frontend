import axios from "axios";

const api = axios.create( {
    baseURL: "https://rrsantos-box-backend.herokuapp.com"  
}) ;

//baseURL: "https://omnistack-backend.herokuapp.com"
//baseURL: "https://rrsantos-box-backend.herokuapp.com"
export default api ;