import { useEffect, useState } from "react";
import BoardHeader from "../BoardHeader.jsx";
import styles from "./ManagerOrders.module.css";
import Order from "./Order.jsx";
import Paginator from "../../Paginator.jsx";
import { usePagination } from "../../../customHooks/usePaginationArray.js";
import { environment } from "../../../environments/environment_dev.js";
import LoaderWheel from "../../LoaderWheel.jsx";

function ManagerOrders() {
  const [orders, setOrders] = useState({});
  const [dataReceived, setDataReceived] = useState([]);
  const [length, setLength] = useState(0);
  const [page, setPage] = useState(1);
  const [rerender, setRerender] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect(function () {
  //   const abortController = new AbortController();

  //   async function getOrders() {
  //     const orders = await getOrdersList();
  //     orders.sort((a, b) => a.createdAt - b.createdAt);
  //     setOrders(orders);
  //   }
  //   getOrders();

  //   return () => abortController.abort();
  // }, []);

  // function onOrdersChange(newData) {
  //   setOrders(newData);
  // }

  const path = environment.orders;
  const itemPerPage = 2;
  // console.log(orders);

  const data = usePagination(path);
  const dataArray = [];

  useEffect(
    function () {
      setLoading(true);
      const abortController = new AbortController();
      async function getOrdersPagination() {
        const list = await data;
        setLength(list.length);
        setDataReceived(list);
        setLoading(false);
      }
      getOrdersPagination();

      return () => abortController.abort();
    },
    [rerender]
  );

  useEffect(
    function () {
      if (dataReceived.length > 0) {
        setLoading(true);
        for (let i = 0; i < dataReceived.length; i += itemPerPage) {
          const chunk = dataReceived.slice(i, i + itemPerPage);
          dataArray.push(chunk);
        }
        setOrders(dataArray[page - 1]);
        setLoading(false);
      }
    },
    [dataReceived, page, rerender]
  );

  function handlePage(page) {
    // console.log(page);
    setPage(page);
  }

  function onStatusChange() {
    setLoading(true);
    setRerender(!rerender);
    setLoading(false);
  }

  if (orders.length === 0) return <h2>There is no orders in this category</h2>;
  if (orders.length > 0)
    return (
      <>
        <h2 className={styles.dashHeading}>Orders in sequence</h2>
        <section className={styles.board}>
          <BoardHeader />
          {loading && <LoaderWheel />}
          <div className={styles.orders}>
            {orders.map((order) => (
              <Order
                key={order.id}
                order={order}
                onStatusChange={onStatusChange}
              />
            ))}
          </div>
          <Paginator
            // pages={orders.length}
            page={page}
            pages={length}
            countOnPage={itemPerPage}
            size={24}
            fontSize={1.6}
            // bgColor=""
            // brColor=""
            handlePage={handlePage}
            // selected="red"
          />
        </section>
      </>
    );
}

export default ManagerOrders;
