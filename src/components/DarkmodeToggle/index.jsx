import React from "react";
import * as styles from "./styles.module.css";

export const DarkmodeToggle = () => {
  const [prefersDarkmode, setPrefersDarkmode] = React.useState(true);
  React.useEffect(() => {
    let shouldUseDarkmode = JSON.parse(
      window.localStorage.getItem("prefers-dark-mode") ?? false
    );
    // if (shouldUseDarkmode === null) {
    //   shouldUseDarkmode = window.matchMedia(
    //     "(prefers-color-scheme: dark)"
    //   ).matches;
    // }
    setPrefersDarkmode(shouldUseDarkmode)
  }, []);

  React.useEffect(() => {
    if (prefersDarkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [prefersDarkmode]);

  const handleClick = () => {
    setPrefersDarkmode(!prefersDarkmode)
    window.localStorage.setItem(
      "prefers-dark-mode",
      JSON.stringify(!prefersDarkmode)
    )
  }

  return (
    <div
      id="dm-toggle"
      className={`${styles.darkmode_toggle} ${
        prefersDarkmode ? styles.is_dark : ""
      }`}
      onClick={() => handleClick()}
      onKeyPress={() => handleClick()}
      tabIndex="0"
      aria-label="Toggle darkmode"
      role="button"
    ></div>
  )
}
