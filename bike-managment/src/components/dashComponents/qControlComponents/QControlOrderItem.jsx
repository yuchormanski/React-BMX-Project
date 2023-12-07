import styles from "./QControlOrderItem.module.css";

import { useReducer, useState } from "react";
import LoaderWheel from "../../LoaderWheel.jsx";
import { timeResolver } from "../../../util/resolvers.js";
import { post } from "../../../util/api.js";
import { environment } from "../../../environments/environment_dev.js";

const initialState = {
  loading: false,
  frameCheck: false,
  wheelCheck: false,
  accessoryCheck: false,
  textFrame: "",
  textWheel: "",
  textAccessory: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: action.payload };
    case "frameIsCheck":
      return { ...state, frameCheck: action.payload };
    case "wheelIsCheck":
      return { ...state, wheelCheck: action.payload };
    case "accessoryIsCheck":
      return { ...state, accessoryCheck: action.payload };
    case "textFrame":
      return { ...state, textFrame: action.payload };
    case "textWheel":
      return { ...state, textWheel: action.payload };
    case "textAccessory":
      return { ...state, textAccessory: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function QControlOrderItem({ product }) {
  const [{ loading, frameCheck, wheelCheck, accessoryCheck, text }, dispatch] =
    useReducer(reducer, initialState);

  function checkboxHandler(e) {
    dispatch({ type: e.target.name, payload: e.target.checked });
  }

  function textHandler(e) {
    if (e.target.name === "frameText") {
      dispatch({ type: "textFrame", payload: e.target.value });
    } else if (e.target.name === "wheelText") {
      dispatch({ type: "textWheel", payload: e.target.value });
    } else if (e.target.name === "accessoryText") {
      dispatch({ type: "textAccessory", payload: e.target.value });
    }
  }

  async function onControl() {
    if (frameCheck && wheelCheck && accessoryCheck) {
      // const result = await post(environment.post_qControl + product.orderId);
      console.log(environment.post_qControl + product.orderId);
    }
  }

  return (
    <>
      {loading && <LoaderWheel />}
      <figure className={styles.order}>
        <header className={styles.header}>
          <p className={styles.model}>
            <span className={styles.headerSpan}>SN: </span>
            {product.serialNumber}
          </p>
          <p className={styles.model}>
            <span className={styles.headerSpan}>Date created: </span>
            {product.dateCreated.replaceAll("/", ".")}
          </p>
          <p className={styles.model}>
            <span className={styles.headerSpan}>ID: </span>
            {product.orderId}
          </p>
        </header>

        <section className={styles.part}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.brand}>
              <p className={styles.catHeader}>Frame</p>
              <span>Brand: </span>
              {product.orderStates[0].partType}
            </h3>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="frameIsCheck"
              value={frameCheck}
              onChange={checkboxHandler}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.info}>
              <span>Model:</span>
              {product.orderStates[0].partModel}
            </p>
            <p className={styles.info}>
              <span>Finished in:</span>
              {product.orderStates[0].elementProduceTimeInMinutes} minutes
            </p>
            <p className={styles.info}>
              <span>Employee name:</span>
              {product.orderStates[0].nameOfEmplоyeeProducedThePart}
            </p>
            <textarea
              className={styles.textarea}
              name={"frameText"}
              onChange={textHandler}
              rows={4}
            ></textarea>
          </div>
        </section>

        <section className={styles.part}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.brand}>
              <h4 className={styles.catHeader}>Wheels</h4>
              <span>Brand: </span>
              {product.orderStates[1].partType}
            </h3>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="wheelIsCheck"
              value={wheelCheck}
              onChange={checkboxHandler}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.info}>
              <span>Model:</span>
              {product.orderStates[1].partModel}
            </p>
            <p className={styles.info}>
              <span>Finished in:</span>
              {product.orderStates[1].elementProduceTimeInMinutes} minutes
            </p>
            <p className={styles.info}>
              <span>Employee name:</span>
              {product.orderStates[1].nameOfEmplоyeeProducedThePart}
            </p>
            <textarea
              className={styles.textarea}
              name={"wheelText"}
              onChange={textHandler}
              rows={4}
            ></textarea>
          </div>
        </section>

        <section className={styles.part}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.brand}>
              <h4 className={styles.catHeader}>Accessory</h4>
              <span>Brand: </span>
              {product.orderStates[2].partType}
            </h3>
            <input
              className={styles.checkbox}
              type="checkbox"
              name="accessoryIsCheck"
              value={accessoryCheck}
              onChange={checkboxHandler}
            />
          </div>
          <div className={styles.content}>
            <p className={styles.info}>
              <span>Model:</span>
              {product.orderStates[2].partModel}
            </p>
            <p className={styles.info}>
              <span>Finished in:</span>
              {product.orderStates[2].elementProduceTimeInMinutes} minutes
            </p>
            <p className={styles.info}>
              <span>Employee name:</span>
              {product.orderStates[2].nameOfEmplоyeeProducedThePart}
            </p>
            <textarea
              className={styles.textarea}
              name={"accessoryText"}
              onChange={textHandler}
              rows={4}
            ></textarea>
          </div>
        </section>

        {/* <img className={styles.background} src="/img/bg-bike.webp" alt="" /> */}

        <button className={`${styles.btn} ${styles.final}`} onClick={onControl}>
          Quality Control
        </button>
      </figure>
    </>
  );
}

export default QControlOrderItem;
