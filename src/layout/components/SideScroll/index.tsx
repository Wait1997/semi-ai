import { FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface SideScrollProps {
  className?: string;
}

const SideScroll: FunctionComponent<PropsWithChildren<SideScrollProps>> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(className, styles["chat-list-wrapper"])}>
      <div className={styles["chat-list"]}>
        <div
          className={classNames(
            styles["scroll-view"],
            styles["chat-scroll-view"]
          )}
        >
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideScroll;
