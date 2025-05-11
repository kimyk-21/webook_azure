import axios from "axios";

const instance = axios.create({
  baseURL: "https://20-93-32-30.nip.io", // 백엔드 주소
  withCredentials: true, // 쿠키 자동 포함
});

export default instance;
