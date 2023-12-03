import { useContext, useEffect, useState } from "react";
import styles from "./OrderItem.module.css";
import { secondsToTime } from "../../util/util.js";
import { UserContext } from "../../context/GlobalUserProvider.jsx";
import { useNavigate } from "react-router-dom";

function OrderItem({ ...product }) {
  const { user } = useContext(UserContext);
  const [index, setIndex] = useState(null);
  const navigate = useNavigate();

  const [item, setItem] = useState("");

  let started = new Date().toLocaleDateString();
  let timeElapsed = "";
  let time;

  useEffect(function () {
    const abortController = new AbortController();

    if (user.department === "Frames") {
      setItem(product.orderStates[0]);
      setIndex(0);
    }
    if (user.department === "Wheels") {
      setItem(product.orderStates[1]);
      setIndex(1);
    }
    if (user.department === "Accessory") {
      setItem(product.orderStates[2]);
      setIndex(2);
    }

    return () => abortController.abort();
  }, []);

  function onButtonClick() {
    let currentDate = new Date();

    if (item.nameOfEmplоyeeProducedThePart === "") {
      setItem({ ...item, nameOfEmplоyeeProducedThePart: 123123 });
    }
    if (item.startedTime === "" && item.finishedTime === "") {
      setItem({ ...item, startedTime: currentDate });
    }
    if (item.startedTime !== "" && item.finishedTime === "") {
      setItem({ ...item, finishedTime: currentDate });
      // timeElapsed = (currentDate.getTime() - item.startedTime.getTime()) / 1000;
    }

    // else {
    //   const endTime =

    //   setItem({ ...item, finishedTime: endTime });
    // }
    // console.log(item.id);
    // let id = item.id;
    // updateOrder();
    // async function updateOrder() {
    //   const res = await put("/data/workerSequence/" + id, item);
    //   const data = await res.json();
    //   console.log(data);
    // }
  }
  if (!!item.startedTime && !!item.finishedTime) {
    // time = secondsToTime(timeElapsed);
    console.log(product);
    const newProduct = JSON.parse(JSON.stringify(product));
    newProduct.orderStates[index] = item;
    newProduct.orderStates[index].isProduced = true;
    // newProduct.orderStates[
    //   index
    // ].nameOfEmplоyeeProducedThePart = `${user.firstName} ${user.lastName}`;

    console.log(newProduct);
  }

  return (
    <figure className={styles.order}>
      <div className={styles.info}>
        <h3 className={styles.brand}>
          <span>Brand: </span>
          {item.partType}
        </h3>
        <p className={styles.model}>
          <span>Model: </span>
          {item.partModel}
        </p>
        <p className={styles.model}>
          <span>Started on: </span>
          {item.startedTime && item.startedTime.toLocaleString().split(", ")[0]}
        </p>
        <p className={styles.model}>
          <span>Finished on: </span>
          {item.finishedTime &&
            item.finishedTime.toLocaleString().split(", ")[0]}
        </p>

        {/* <p className={styles.job}>
          <span>Finished in: </span>
          {time}
        </p> */}
      </div>

      <div className={styles.description}>
        <span>Description:</span>
        {product.description}
      </div>

      <div className={styles.timer}>
        <button
          className={styles.startBtn}
          onClick={onButtonClick}
          disabled={item.isProduced}
        >
          {item.startedTime === "" && item.finishedTime === "" && "Start"}
          {item.startedTime !== "" && item.finishedTime === "" && "In Progress"}
          {item.startedTime !== "" && item.finishedTime !== "" && "Finished"}
        </button>
      </div>
    </figure>
  );
}

export default OrderItem;

// {
//   "partId": 2,
//   "partType": "Wheel",
//   "partModel": "Wheel of the Year",
//   "nameOfEmplоyeeProducedThePart": " ",
//   "isProduced": false,
//   "startedTime": "",
//   "finishedTime": ""
// }
