import axios from 'axios';

const BASE_API = 'http://localhost:3001'

export const getAll = () =>{
  return axios.get(`${BASE_API}/students`)
    .then(function (response) {
      console.log(response);
      return response
    })
    .catch(function (error) {
      console.log(error);
      throw error
    })
    .finally(function () {
    });
}

export const addOne = async ({ fullName, email }) => {
  const userData = { fullName, email };

  try {
    const response = await axios.post(`${BASE_API}/students/add`, userData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

