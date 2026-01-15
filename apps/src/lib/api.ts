import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchContent = async () => {
  const res = await axios.get(`${API_URL}/content`);
  return res.data.items;
};
