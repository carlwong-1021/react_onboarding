import axios, { AxiosResponse } from "axios";

const callAPI = async (axiosReq: () => Promise<AxiosResponse<any>>) => {
  try {
    const result = await axiosReq();
    if (result.status === 200 || result.status === 201) return result.data;
    console.log("callAPIError");
    return;
  } catch (err) {
    console.log("callAPIError");
    return;
  }
};

export async function listArticles() {
  return callAPI(() => axios.get("http://localhost:3000/api/articles"));
}

export async function getArticle(id: string) {
  return callAPI(() => axios.get(`http://localhost:3000/api/articles/${id}`));
}

export async function createArticle(data: any) {
  return callAPI(() => axios.post("http://localhost:3000/api/articles", data));
}

export async function updateArticle(id: string, data: any) {
  return callAPI(() =>
    axios.put(`http://localhost:3000/api/articles/${id}`, data)
  );
}

export async function removeArticle(id: string) {
  // write your code here
}
