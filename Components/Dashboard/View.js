import styles from "./../../styles/dashboard/view.module.css";

const View = () => {
  const lists = [
    {
      name: "Today Sell",
      amount: 25000,
      color: "pink",
    },
    {
      name: "Yesterday Sell",
      amount: 25000,
      color: "indigo",
    },
    {
      name: "Today Order",
      amount: 25000,
      color: "blue",
    },
    {
      name: "Last Week",
      amount: 25000,
      color: "cyan",
    },
    {
      name: "Last Month",
      amount: 25000,
      color: "purple",
    },
  ];

  return (
    <>
      <div className={styles.balance_content}>
        {lists.map((item, i) => (
          <div key={i} className={`${styles.balance_card} bg-${item.color}-500`}>
            <h1>{item.name}</h1>
            <span>{item.amount}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default View;
