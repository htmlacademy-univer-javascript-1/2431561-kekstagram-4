import {BASE_URL, METHOD, ROUTE, SERVER_ERROR_TEXT} from './constant.js';

const load = (route, errorText, method = METHOD.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errorText);
    });

const getData = () => load(ROUTE.GET_DATA, SERVER_ERROR_TEXT.GET_DATA);
const sendData = (body) => load(ROUTE.SEND_DATA, SERVER_ERROR_TEXT.SEND_DATA, METHOD.POST, body);

export{getData, sendData};
