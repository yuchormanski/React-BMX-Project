import styles from "./PopupInfo.module.css";

import { User } from "@phosphor-icons/react";

function PopupInfo({ person, onClose, onOpen }) {
  console.log(person);
  return (
    <div className={styles.modalBg} onClick={onClose}>
      <figure className={styles.fullInfo}>
        <button className={styles.closeIcon} onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
        {!person.imageUrl && (
          <User
            size={196}
            color="#363636"
            weight="thin"
            className={styles.baseImg}
          />
        )}
        {person.imageUrl && (
          <img
            src={person.imageUrl}
            alt={`Image of ${person.firstName} ${person.lastName}`}
          />
        )}

        <div className={styles.personData}>
          <h2 className={styles.heading}>
            {person.firstName} {person.lastName}
          </h2>
          <div className={styles.infoBox}>
            <p className={`${styles.info}`}>
              <span>Email:</span>
              {person.email}
            </p>
            <p className={`${styles.info}`}>
              <span>Phone:</span>
              {person.phoneNumber}
            </p>
            <p className={`${styles.info}`}>
              <span>Hire date:</span>
              {person.dateOfHire}
            </p>
            <p className={`${styles.info}`}>
              <span>Department:</span>
              {person.department}
            </p>

            <p className={`${styles.info}`}>
              <span>Position:</span>
              {person.position}
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}

export default PopupInfo;
