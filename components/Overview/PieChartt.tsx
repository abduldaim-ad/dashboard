import * as React from "react";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";
import styles from "./styles/PieChartt.module.css";

const palette = ["#00FF7C", "#7C00FF", "#FF7C00"];

const data = [
  { id: 0, value: 10, label: "series A" },
  { id: 1, value: 15, label: "series B" },
  { id: 2, value: 20, label: "series C" },
];

const PieChartt = () => {
  return (
    <div className={styles.mainDiv}>
      <PieChart
        colors={palette}
        series={[
          {
            data,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: "gray",
          },
        }}
        height={200}
      />
    </div>
  );
};

export default PieChartt;
