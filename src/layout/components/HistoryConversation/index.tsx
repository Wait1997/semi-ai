import React, { FC, PropsWithChildren, useState } from "react";
import { NavLink } from "react-router-dom";
import { Path } from "@/constant";
import {
  IconHistory,
  IconChevronRight,
  IconChevronDown,
} from "@douyinfe/semi-icons";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface HistoryProps {
  prefix?: React.ReactNode;
  className?: string;
  title?: string;
  moreTitle?: string;
}

export interface CollapseProps {
  moreTitle?: string;
  style?: React.CSSProperties;
}

const HistoryTitle: FC<{
  prefix?: React.ReactNode;
  arrow?: "down" | "right";
  title: string;
  onClick?: (arrow: "down" | "right") => void;
}> = ({ prefix, title, arrow = "down", onClick }) => {
  const onTitleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (arrow === "down") {
      onClick?.("right");
    } else {
      onClick?.("down");
    }
    e.stopPropagation();
  };

  return (
    <div className={styles.titleWrapper}>
      <div className={styles.sticky}>
        <div
          className={classNames(styles.mainItem, styles["section-item"])}
          onClick={onTitleClick}
        >
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <div
            className={classNames(styles.title, styles["section-item-title"])}
          >
            {title}
          </div>
          {arrow && (
            <div className={styles.suffix}>
              {arrow === "down" ? <IconChevronDown /> : <IconChevronRight />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CollapseContent: FC<PropsWithChildren<CollapseProps>> = ({
  moreTitle,
  children,
}) => {
  return (
    <div className={styles["collapse-content"]} style={{ height: 210 }}>
      <div className={styles.wrapper}>
        <div className={styles.collapse}>
          <div className={styles.content}>
            {children}
            <NavLink
              to={Path.ChatConversations}
              className={(props) => {
                return props.isActive
                  ? classNames(styles["all-chats"], styles.active)
                  : classNames(styles["all-chats"]);
              }}
            >
              <div className={styles["all-chats-title-wrapper"]}>
                {moreTitle}
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryConversation: FC<PropsWithChildren<HistoryProps>> = ({
  prefix = <IconHistory />,
  title = "最近对话",
  moreTitle = "查看全部...",
  children,
}) => {
  const [direction, setDirection] = useState<"down" | "right">("down");

  return (
    <div className={styles.historyContent}>
      <HistoryTitle
        prefix={prefix}
        title={title}
        arrow={direction}
        onClick={(arrow) => {
          setDirection(arrow);
        }}
      />
      <CollapseContent moreTitle={moreTitle}>{children}</CollapseContent>
    </div>
  );
};

export default HistoryConversation;
