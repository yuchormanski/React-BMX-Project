import { useEffect, useState } from "react";
import styles from "./Order.module.css";
import { getElement } from "../../../bikeServices/service.js";
import LoaderWheel from "../../LoaderWheel.jsx";
import Button from "../../Button.jsx";
import {
  onApproveHandler,
  onDeleteHandler,
  onRejectHandler,
} from "./managerActions/orderActions.js";

function Order({ order }) {
  console.log(order);
  const { frame, wheel, accessory, createdAt, count, ownerId, id } = order;

  // const [frame, setFrame] = useState("");
  // const [wheel, setWheel] = useState("");
  // const [accessory, setAccessory] = useState("");
  // const [customerId, setCustomerId] = useState("");
  // const [orderId, setOrderId] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(
  //   function () {
  //     const abortController = new AbortController();

  //     setLoading(true);
  //     async function orderElements() {
  //       try {
  //         const frameData = await getElement("frames", order.frameId);
  //         const wheelData = await getElement("wheels", order.wheelId);
  //         const accessoryData = await getElement(
  //           "accessories",
  //           order.accessoryId
  //         );
  //         setFrame(frameData);
  //         setWheel(wheelData);
  //         setAccessory(accessoryData);
  //         setOrderId(order.id);
  //         setCustomerId(order.ownerId);
  //       } catch (err) {
  //         console.error(err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     orderElements();
  //     return () => abortController.abort();
  //   },
  //   [order]
  // );

  function onApproveHandler(id) {
    const approvedOrder = {
      frame,
      wheel,
      accessory,
      frameStartedTime: "",
      frameFinishedTime: "",
      wheelStartedTime: "",
      wheelFinishedTime: "",
      accessoryStartedTime: "",
      accessoryFinishedTime: "",
      // id: orderId,
      // customerId,
    };

    console.log(approvedOrder);
  }

  return (
    <>
      {/* {order && <LoaderWheel />} */}
      <div className={styles.box}>
        <div className={styles.additional}>
          <p>
            <span>Order ID: </span>
            {id}
          </p>
          <p>
            <span>Customer ID: </span>
            {ownerId}
          </p>
        </div>

        <section className={styles.section}>
          <div className={styles.itemInfo}>
            <div className={styles.info}>
              <p className={styles.content}>
                <span>Frame:</span>
                {frame.name}
              </p>
              <p className={styles.content}>
                <span>OEM Number:</span>
                {frame.OEMNumber}
              </p>
              <p className={styles.qty}>Qty: 2</p>
            </div>

            <div id={"wheel"} className={styles.info}>
              <p className={styles.content}>
                <span>Wheels:</span>
                {wheel.name}
              </p>
              <p className={styles.content}>
                <span>OEM Number:</span>
                {wheel.OEMNumber}
              </p>
              <p className={styles.qty}>Qty: 2</p>
            </div>

            <div id={"accessory"} className={styles.info}>
              <p className={styles.content}>
                <span>Accessory:</span>
                {accessory.name}
              </p>
              <p className={styles.content}>
                <span>OEM Number:</span>
                {accessory.OEMNumber}
              </p>
              <p className={styles.qty}>Qty: 2</p>
            </div>
          </div>

          <div className={styles.actions}>
            <Button type={"approve"} onClick={onApproveHandler} id={id}>
              Approve
            </Button>
            <Button type={"reject"} onClick={onRejectHandler} id={id}>
              Reject
            </Button>
            <Button type={"delete"} onClick={onDeleteHandler} id={id}>
              Delete
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Order;
