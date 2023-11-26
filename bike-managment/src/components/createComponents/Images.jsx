import { useEffect, useState } from "react";
import styles from "./Images.module.css";

function Images({ imgArray }) {
  const [arr, setArr] = useState([]);

  useEffect(
    function () {
      const abortController = new AbortController();

      setArr(imgArray);

      return () => abortController.abort();
    },
    [imgArray]
  );

  if (arr) return <></>;

  return (
    <div className={styles.imgBox}>
      <p>jfdhsl</p>
    </div>
  );
}

export default Images;
