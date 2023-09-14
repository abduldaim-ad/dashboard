import React from "react";
import LineChartt from "../../components/Customers/LineChartt";
import ScatterChartt from "../../components/Customers/ScatterChartt";
import styles from "./styles/Customers.module.css";
import SpeedDiall from "../../components/Customers/SpeedDiall";
import TransferListt from "../../components/Customers/TransferListt";

type Props = {};

const Customers = (props: Props) => {
  return (
    <div>
      <div className={styles.mainDiv}>
        <LineChartt />
        <ScatterChartt />
      </div>
      <TransferListt />
      <div className={styles.dialStyle}>
        <SpeedDiall />
      </div>
    </div>
  );
};

export default Customers;
