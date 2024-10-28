import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "@/constant";
import { IconPlus } from "@douyinfe/semi-icons";
import styles from "./index.module.scss";

export interface NewChatProps {
  name: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
}

const NewChat: React.FunctionComponent<NewChatProps> = ({ name, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.chatContainer}>
      <div
        className={styles.creation}
        onClick={() => {
          onClick?.();
          navigate(Path.Chat);
        }}
      >
        <div className={styles.left}>
          <div className={styles.button}>{<IconPlus />}</div>
          <div className={styles["text-creation"]}>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(NewChat);
