export const FETCH_NAV_TRANSLATE = "FETCH_NAV_TRANSLATE ";
export const GET_LANG = "FETCH_NAV_TRANSLATE ";

let lang = localStorage.getItem("lang")
  ? localStorage.getItem("lang")
  : "SERBIAN";

export const fetchNavTranslate = value => dispatch => {
  localStorage.setItem("lang", value);
  dispatch({
    type: FETCH_NAV_TRANSLATE,
    payload: value
  });
};
export const getLangCurent = () => dispatch => {
  dispatch({
    type: GET_LANG,
    payload: lang
  });
};
