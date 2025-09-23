import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";
export async function getAllImage() {
  const response = await axios.get(`${URL}/photos?_limit=5`);
  console.log(response.data)
  return response.data;
}
// export type TGetAllImage = ReturnType<Awaited<typeof getAllImage>>
