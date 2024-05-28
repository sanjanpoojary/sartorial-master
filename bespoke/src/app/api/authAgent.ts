import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { router } from '../router/Routes';
import { store } from '../store/ConfigureStore';

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));

const authService = axios.create({
  baseURL: 'http://localhost:6002/api/',
  withCredentials: true,
});

const responseBody = (response: AxiosResponse) => response.data;

authService.interceptors.request.use((config) => {
  const token = store.getState().account.user?.token;
  if (token) config.headers.setAuthorization(`Bearer ${token}`);
  return config;
});

authService.interceptors.response.use(
  async (response) => {
    await sleep();
    return response;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modelStateErrors.push(data.errors[key]);
            }
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 500:
        router.navigate('/server-error', { state: { error: data } });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  }
);

const requests = {
  get: (url: string) => authService.get(url).then(responseBody),
  post: (url: string, body: object) =>
    authService.post(url, body).then(responseBody),
  put: (url: string, body: object) =>
    authService.put(url, body).then(responseBody),
  delete: (url: string) => authService.delete(url).then(responseBody),
};

const Account = {
  login: (values: any) => requests.post('account/login', values),
  register: (values: any) => requests.post('account/register', values),
  currentUser: () => requests.get('account/currentUser'),
};

const authAgent = {
  Account,
};

export default authAgent;
