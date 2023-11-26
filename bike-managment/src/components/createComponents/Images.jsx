import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Images.module.css";

function Images({ imgArray }) {
  const [arr, setArr] = useState([]);
  const [modal, setModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(
    function () {
      const abortController = new AbortController();

      setArr(imgArray);

      return () => abortController.abort();
    },
    [imgArray]
  );

  function onClickHandler(img) {
    setCurrentImg(img);
    setModal(true);
  }

  function closeModalHandler() {
    setModal(false);
    setCurrentImg("");
  }

  if (!arr) return <></>;

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div className={styles.topContent}>
            <button className={styles.closeBtn} onClick={closeModalHandler}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <img src={currentImg} alt="Frame Image" />
          </div>
        </div>
      )}

      <div className={styles.imgBox}>
        {arr.length > 0 &&
          arr.map((x, i) => (
            <img
              src={x}
              alt="Frame image"
              key={i}
              onClick={() => onClickHandler(x)}
            />
          ))}
      </div>
    </>
  );
}

export default Images;
