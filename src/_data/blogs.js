const axios = require("axios")

module.exports = async (country) => {
  try {
    const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return response.data
  } catch (error) {
    console.log(error)
  } 
}