import styles from "./Category.module.css";

function Category({ user }) {
  return (
    <>
      <span>Category: </span>
      <h3>
        {/* TODO: change with actual - probably user.category === 'frames' */}
        {console.log(user)}
        <span
          className={styles.element}
          style={
            user.category === "frames" ? { color: "var(--color-line)" } : null
          }
        >
          Frames
        </span>{" "}
        &#10072;{" "}
        <span
          className={styles.element}
          style={
            user.category === "wheels" ? { color: "var(--color-line)" } : null
          }
        >
          Tyres
        </span>{" "}
        &#10072;{" "}
        <span
          className={styles.element}
          style={
            user.category === "accessory"
              ? { color: "var(--color-line)" }
              : null
          }
        >
          Assembly
        </span>
      </h3>
    </>
  );
}

export default Category;
