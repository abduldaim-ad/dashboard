import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import GrossProfit from "../../components/Overview/GrossProfit";
import { PieChart } from "@mui/x-charts";
import PieChartt from "../../components/Overview/PieChartt";
import styles from "./styles/Overview.module.css";
import DataGridd from "../../components/Overview/DataGridd";

type Props = {};

const Overview = (props: Props) => {
  return (
    <>
      <div className={styles.coverDiv}>
        <GrossProfit />
        <PieChartt />
      </div>
      <DataGridd />
    </>
  );
};

export default Overview;
