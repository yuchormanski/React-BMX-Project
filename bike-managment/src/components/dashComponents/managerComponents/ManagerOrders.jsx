import BoardHeader from "../BoardHeader.jsx";
import styles from "./ManagerOrders.module.css";

function ManagerOrders() {
  return (
    <>
      <h2 className={styles.dashHeading}>Orders in sequence</h2>
      <section className={styles.board}>
        <BoardHeader />
        <div className={styles.orders}>
          <h2>There is no orders in this category</h2>
        </div>
      </section>
    </>
  );
}

export default ManagerOrders;
