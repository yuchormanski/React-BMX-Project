import styles from "./InProgress.module.css";

import { useEffect, useState } from "react";

import { get } from "../../../util/api.js";
import { environment } from "../../../environments/environment_dev.js";

import BoardHeader from "../BoardHeader.jsx";
import OrderInProgress from "./OrderInProgress.jsx";
import LoaderWheel from "../../LoaderWheel.jsx";

function InProgress() {
  const [orderList, setOrderList] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    setLoading(true);
    const abortController = new AbortController();

    async function getInProgressOrders() {
      const result = await get(environment.GET_ALL_IN_PROGRESS);
      if (!result) {
        setLoading(false);
        return setError({
          message: "Something went wrong. Service can not get data!",
        });
      }
      setOrderList(result);
      setLoading(false);
    }
    getInProgressOrders();

    return () => abortController.abort();
  }, []);

  if (orderList.length === 0)
    return <h2>There is no orders in this category</h2>;
  return (
    <>
      <h2 className={styles.dashHeading}>
        Orders in sequence by time of creation
      </h2>
      <section className={styles.board}>
        <BoardHeader />
        <div className={styles.orders}>
          {loading && <LoaderWheel />}
          {orderList.map((order, i) => (
            <OrderInProgress key={order.orderId} order={order} i={i + 1} />
          ))}
        </div>
      </section>
    </>
  );
}

export default InProgress;
