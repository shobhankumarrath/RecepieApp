import Styles from "./container.module.css";
export default function parentContainer({ children }) {
  return <div className={Styles.parentContainer}>{children}</div>;
}
