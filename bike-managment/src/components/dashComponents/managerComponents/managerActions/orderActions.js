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

// {
//   "unitType": "frame",
//   "model": "BGS5657",
//   "brand": "Scott",
//   "jobType": "painting",
//   "startedTime": "",
//   "finishedTime": "",
//   "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, dolorum.",
//   "id": "hkjhsf766ds86f7s"
// }
