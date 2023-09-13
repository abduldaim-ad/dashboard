import React from "react";
import LineChartt from "../../components/Customers/LineChartt";
import ScatterChartt from "../../components/Customers/ScatterChartt";
import styles from "./styles/Customers.module.css";

type Props = {};

const Customers = (props: Props) => {
  return (
    <div className={styles.mainDiv}>
      <LineChartt />
      <ScatterChartt />
    </div>
  );
};

export default Customers;
