import ky from "ky";

// TODO: Load this from an environment variable
const API_URL = "http://localhost:3004/users";

export default {
  getAllUsers() {
    return ky.get(API_URL).json();
  },

  // Assume that there is only at most one user with a given username
  findUser(username, password) {
    // http://localhost:3004/users?username=codefinity&password=forgetmenot
    return ky
      .get(`${API_URL}?username=${username}&password=${password}`)
      .json();

    // TODO: Grab index 0 and wrap it in a promise and send it back
    // TODO: Reject the Promise if there is the array is empty (no user found)
  },
};
