import Axios from '../utils/http.config';

export class LoginService {
  static submit(LoginData) {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      console.log(LoginData);
      return Axios.post(`/user/`, {
        LoginData,
      })
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }
}
