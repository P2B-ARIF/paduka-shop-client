import { AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import styles from "./../../styles/dashboard/leftDashboard.module.css";

const leftDashboard = () => {
  return (
    <div className={styles.dashboard_left}>
      <div className={styles.profile}>
        <Image
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVybh3KjWrKdzfpH6NK6UpVxOrfU1_fJALkk9f9_H&s"
          }
          width={100}
          height={100}
          alt="profile"
        />
        <div className={styles.profile_details}>
          <h3>MD Arif</h3>
          <h4>Owner</h4>
        </div>
      </div>

      <div className={styles.menu_list}>
        <ul className={styles.menu_ul}>
          <li className={styles.menu_li}>
            Dashboard
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            Profile
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            History
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            Women
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            Men
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            Children
            <AiOutlineRight />
          </li>
          <li className={styles.menu_li}>
            Several
            <AiOutlineRight />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default leftDashboard;
