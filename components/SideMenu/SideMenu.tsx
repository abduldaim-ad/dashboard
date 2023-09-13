import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import Link from "next/link";
import styles from "./styles/SideMenu.module.css";

type Props = {};

const SideMenu = (props: Props) => {
  return (
    <Sidebar
      className={styles.menuStyle}
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "rgb(54, 139, 235);",
          boxShadow: "2px 4px 2px 2px rgb(34, 88, 150)",
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                color: disabled ? "#f5d9ff" : "black",
                backgroundColor: active ? "#eecef9" : "undefined",
              };
            if (level === 1)
              return {
                color: disabled ? "#f5d9ff" : "black",
                backgroundColor: active ? "#eecef9" : "grey",
              };
          },
        }}
      >
        <SubMenu label="Authentication">
          <MenuItem component={<Link href="/login" />}> Login </MenuItem>
          <MenuItem> Sign Up </MenuItem>
        </SubMenu>
        <MenuItem component={<Link href="/overview" />}> Overview </MenuItem>
        <MenuItem component={<Link href="/customers" />}> Customers </MenuItem>
        <MenuItem> Companies </MenuItem>
        <MenuItem> Account </MenuItem>
        <MenuItem> Settings </MenuItem>
        <MenuItem component={<Link href="/dashboard" />}> Error </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideMenu;
