import axios from 'axios';
// import * as Sentry from '@sentry/browser';

const { NEXT_PUBLIC_CACHE_API: baseURL } = process.env;

const apiService = axios.create({
  baseURL,
});

// const sentryReport = (error) => {
  //   Sentry.configureScope(((scope) => scope.setLevel('info')));
  //   const newError = new Error(error.message);
  //   newError.name = error.message;
  //   newError.stack = error.status;
  //   Sentry.captureException(newError);
  // };
  
  apiService.interceptors.request.use((config) => {
    // const { REACT_APP_TOKEN } = process.env;
    // if (REACT_APP_TOKEN) {
      //   config.headers.Authorization = `${REACT_APP_TOKEN}`;
      //   config.headers['Content-Type'] = 'application/json';
      // }
  return config;
});

apiService.interceptors.response.use(
  (response) => response.data,
  (e) => {
    const error = e || {};
    const { response = {} } = error;

    if (response.status >= 500 || !response.status) {
      error.message = 'Tivemos um problema, tente novamente mais tarde';
      // sentryReport(error);
    } else {
      error.message = response.data.description || response.data.message;
    }

    console.error('[AXIOS][ERROR]:', error.message);
    return Promise.reject(error);
  },
);

export default apiService;
