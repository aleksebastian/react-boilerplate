import React from "react";

import styles from "./app.module.css";

const App = (props) => (
  <div className={styles.main}>
    <h1 className={styles.header}>Hello World!</h1>
    <h3 className={styles.subHeader}>React Boilerplate</h3>
  </div>
);

export default App;
