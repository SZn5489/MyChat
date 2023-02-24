import axios from "axios";

const axios_instance = axios.create({
  timeout: 500000,
  withCredentials: true,
  crossDomain: true,
});

//请求拦截器
axios_instance.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

//响应拦截器
axios_instance.interceptors.response.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err.response);
  }
);

export { axios_instance };
