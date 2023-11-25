function onApproveHandler(id) {
  console.log(id);
}
function onRejectHandler(id) {
  console.log("In process" + id);
}
function onDeleteHandler(id) {
  console.log("In process" + id);
}

export { onApproveHandler, onRejectHandler, onDeleteHandler };
