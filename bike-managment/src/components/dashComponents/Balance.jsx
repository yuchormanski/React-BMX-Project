import styles from "./Balance.module.css";

function Balance({ user }) {
  return (
    <>
      <span>Balance: </span>
      <h3 className={styles.cash}>
        {user.balance} <span className={styles.smaller}>BGN</span>
      </h3>
    </>
  );
}

export default Balance;