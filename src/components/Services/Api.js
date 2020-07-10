import axios from "axios";
const ApiUrl = "http://localhost:65472/api/Blogs";


export const GetBlog = async (BlogId) => {
  try {
    const response = await axios.get(`${ApiUrl}/GetBlog/${BlogId}`);
    return response.data;
  } catch (err) {
    console.error(`There was a problem: ${err}`);
    throw err;
  }
};

export const AuthorOfBlog = async (AuthorId) => {
  try {
    const response = await axios.get(`${ApiUrl}/AuthorOfBlog/${AuthorId}`);
    return response.data;
  } catch (err) {
    console.error(`There was a problem: ${err}`);
    throw err;
  }
};

export const Like = async (BlogId) => {
  try {
    const response = await axios.get(`${ApiUrl}/UpdateLike/${BlogId}`);
    return response.data;
  } catch (err) {
    console.error(`There was a problem: ${err}`);
    throw err;
  }
};
