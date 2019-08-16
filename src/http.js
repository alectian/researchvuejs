import axios from "axios";

const service = axios.create({
  baseURL: window.location.href,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json"
    }
});

// 请求拦截
service.interceptors.request.use(
  config => {
    if (!config.headers["Authorization"]) {
      //带token
      if (localStorage.token) {
        config.headers["Authorization"] = localStorage.token;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  response => {
    let token = response.data["token"];
    if (token && token != "") {
      localStorage.token = token;
    }
    return response.data;
  },
  err => {
    return Promise.reject(err);
  }
);
export default service;
