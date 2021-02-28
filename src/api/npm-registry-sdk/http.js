import axios from 'axios';

function http(avoidCors = false) {
  const corsUrl = avoidCors
    ? 'https://cors.nikitosgolubev.workers.dev/corsproxy/?apiurl='
    : '';

  return axios.create({
    baseURL: `${corsUrl}https://registry.npmjs.org/`,
  });
}

export default http;
