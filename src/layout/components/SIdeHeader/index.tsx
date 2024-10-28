import { memo } from "react";
import { Button, Tooltip } from "@douyinfe/semi-ui";
import { IconSidebar } from "@douyinfe/semi-icons";

import styles from "./index.module.scss";
import Avatar from "@/assets/avatar.jpg";

function SideHeader({ url, title }: { url?: string; title?: React.ReactNode }) {
  const sidebarLogo = url ?? Avatar;

  return (
    <div className={styles.sideHeader}>
      <div className={styles.left}>
        <img src={sidebarLogo} className={styles.avatar} />
        <div className={styles.title}>{title}</div>
      </div>
      {/* <Tooltip position="right" content="收起侧栏"> */}
      <Button
        icon={<IconSidebar className={styles["sidebar-icon"]} />}
        theme="borderless"
        size="small"
      />
      {/* </Tooltip> */}
    </div>
  );
}

export default memo(SideHeader);
