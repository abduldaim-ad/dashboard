import React from "react";
import SideMenu from "../SideMenu";
import styles from "./styles/Layout.module.css";
import Navbar from "../Navbar/Navbar";

type LayoutProps = {
  children: any;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layoutStyle}>
      <SideMenu />
      <Navbar />
      <main className={styles.childrenStyle}>{children}</main>
    </div>
  );
};

export default Layout;
