import { useContext, useState } from "react";

import styles from "./UserInfo.module.css";

import { UserContext } from "../../context/GlobalUserProvider.jsx";

import UserContactInfo from "./UserContactInfo.jsx";
import BoardHeader from "./BoardHeader.jsx";
import WorkerContactInfo from "./WorkerContactInfo.jsx";
import { setUserData } from "../../util/util.js";
import { updateUserData, userInfo } from "../../userServices/userService.js";

function UserInfo() {
  const { user, updateUser } = useContext(UserContext);
  const [add, setAdd] = useState("");

  async function addMoneyBtnHandler() {
    // TODO: make request to update user balance
    //next is only for testing

    const currentUser = await userInfo(user.id);

    if (add === 0) return;
    updateUser({ ...user, balance: user.balance + add });
    setUserData({ ...user, balance: user.balance + add });
    setAdd("");

    const data = {
      ...currentUser,
      password: currentUser.repass,
      balance: currentUser.balance + add,
    };

    const result = await updateUserData(user.id, data);
  }

  return (
    <>
      <h2 className={styles.dashHeading}>
        {user.firstName} {user.lastName}
      </h2>

      <section className={styles.board}>
        <BoardHeader />

        <div className={styles.userInfoWrapper}>
          <figure className={styles.mainInfo}>
            <div className={styles["imgHolder"]}>
              <img src="/img/vintage-bicycle.png" alt="User picture" />
              {/* <img src="https://i.pravatar.cc/300" alt="User picture" /> */}
            </div>

            <p className={styles.userEmail}>{user.email}</p>
            <p className={styles.userEmail}>{user.phone}</p>
            {user.role === "user" && (
              <>
                <input
                  className={styles.addMoneyInput}
                  type="text"
                  value={add}
                  onChange={(e) => setAdd(Number(e.target.value))}
                />
                <button
                  className={styles.addMoney}
                  onClick={addMoneyBtnHandler}
                >
                  Add money
                </button>
              </>
            )}
          </figure>

          {user.role === "user" && <UserContactInfo user={user} />}
          {user.role === "worker" && <WorkerContactInfo user={user} />}
        </div>
      </section>
    </>
  );
}

export default UserInfo;
