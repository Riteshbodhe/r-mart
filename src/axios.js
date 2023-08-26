 import axios from "axios";

 const instance = axios.create({
//THE API URL(CLOUD FUNCTION)
    baseURL: "https://us-central1-r--mart.cloudfunctions.net/api"
    //'http://127.0.0.1:5001/r--mart/us-central1/api' 
 });

 export default instance;

 