import axios from "axios";

export default axios.create({
    baseURL : "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID CE4h_wQvp6jPKJ8YPAfOJmLTOhjWJX1XJZxVpcDRqN8",
        
      }
});