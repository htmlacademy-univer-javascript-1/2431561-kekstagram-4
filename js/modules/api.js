import {BASE_URL, Method, Route, ServerErrorText} from './constant.js';

const loadData = (route, errorText, method = Method.GET, body = null) =>
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

const getData = () => loadData(Route.GET_DATA, ServerErrorText.GET_DATA);
const sendData = (body) => loadData(Route.SEND_DATA, ServerErrorText.SEND_DATA, Method.POST, body);

export{getData, sendData};
