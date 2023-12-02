export const environment = {
  // TODO: fix routes in services
  BASE_URL: "http://localhost:9000",
  // fix in main
  // TODO:
  LOGIN: "/login",
  REGISTER_CLIENT: "/api/client/register",
  REGISTER_EMPLOYEE: "/api/employee/register",
  // LOGOUT: "/users/logout",
  // fix in main
  UPDATE_CLIENT: "/users/", // + id
  UPDATE_EMPLOYEE: "/users/", // + id
  INFO_CLIENT: "/users/", // + id
  INFO_EMPLOYEE: "/users/", // + id

  // TODO: for local list load
  GET_ALL_EMPLOYERS: "/users?role=worker&role=manager&role=qControl",

  // TODO: change to project path
  GET_ALL_IN_PROGRESS: "/inProgress/",
  GET_ALL_INTENDED: "/",
  indexPage: "/indexPage",
  frames: "/frames/",
  wheels: "/wheels/",
  accessories: "/accessories/",
  selected_part: "/selected_part/",
  orders: "/orders/",
  del_order: "/orders/",
};
