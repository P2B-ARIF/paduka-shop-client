import Navbar from "../../Components/Dashboard/Navbar";
import styles from "./../../styles/dashboard/dashboardBody.module.css";
import LeftDashboard from "../../Components/Dashboard/LeftDashboard";
import View from "../../Components/Dashboard/View";
// import login from "./login";

const dashboard = () => {
  return (
    <div className="relative">
      <Navbar />
      <section className={styles.dashboard_body}>
        <LeftDashboard />
        <div className={styles.dashboard_right}>
          <View />
        </div>
      </section>
      {/* <login /> */}
    </div>
  );
};

export default dashboard;
