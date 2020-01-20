import API from "./data";

const AUTHORIZATION = `Basic er883jdzbdw=${Math.random()}`;
const END_POINT = `https://htmlacademy-es-9.appspot.com/cinemaddict/`;
const api = new API({
  endPoint: END_POINT,
  authorization: AUTHORIZATION
});

// api.getComments(5);

api.getController();

