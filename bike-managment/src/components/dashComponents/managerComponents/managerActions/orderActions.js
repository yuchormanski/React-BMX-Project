import { getElement, getOrder } from "../../../../bikeServices/service.js";

async function onApproveHandler(id) {
  const order = await getOrder(id);
  console.log(order);
}
function onRejectHandler(id) {
  console.log("In process" + id);
}
function onDeleteHandler(id) {
  console.log("In process" + id);
}

export { onApproveHandler, onRejectHandler, onDeleteHandler };
