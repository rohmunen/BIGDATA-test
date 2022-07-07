import React from "react";
import styles from "./styles.module.scss";

interface MainLayoutProps {
  
}

export const MainLayout = (props: React.PropsWithChildren<MainLayoutProps>) => {
  const {
    children,
  } = props

  return (
    <div className={styles.layout}>
      { children }
    </div>
  )
}