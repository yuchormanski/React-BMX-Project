import { useContext } from "react";
import { getElement, getOrder } from "../bikeServices/service.js";
import { environment } from "../environments/environment_dev.js";
import { del } from "../util/api.js";
import { OrdersContext } from "../context/GlobalUserProvider.jsx";

async function approveHandlerAction(id) {
  const approve = await del(`${environment.del_order}${id}`);
  // console.log(approve);
  // onApprove((o) => Object.values((orders) => console.log(x)));
  return approve;
}

function onRejectHandler(id) {
  console.log("In process" + id);
}
function onDeleteHandler(id) {
  console.log("In process" + id);
}

export { approveHandlerAction, onRejectHandler, onDeleteHandler };
