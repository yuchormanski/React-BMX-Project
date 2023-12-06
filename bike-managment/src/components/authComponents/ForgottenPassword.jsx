import styles from "./ForgottenPassword.module.css";

function ForgottenPassword() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h2 className={styles.heading}>Password reset</h2>
        Please, fill your email address
        {/* <InputComponent /> */}
        <button>Reset</button>
      </form>
    </div>
  );
}

export default ForgottenPassword;
