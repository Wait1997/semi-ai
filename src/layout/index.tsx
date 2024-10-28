import { FC, PropsWithChildren, useMemo } from "react";
import { menuContent } from "@/constant";
import { Divider } from "@douyinfe/semi-ui";
import YZLayout from "./components/Layout";
import SideHeader from "./components/SIdeHeader";
import NewChat from "./components/NewChat";
import SideScroll from "./components/SideScroll";
import SideContent, { type ListProps } from "./components/SideContent";
import HistoryConversation from "./components/HistoryConversation";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface LayoutProps {
  className?: string;
}

const LayoutWrapper: FC<PropsWithChildren<LayoutProps>> = ({
  className,
  children,
}) => {
  const contents = useMemo<ListProps[]>(() => {
    return menuContent.map((item) => ({
      path: item.path,
      title: item.title,
      icon: item.key,
    }));
  }, []);

  return (
    <YZLayout className={className}>
      <div className={styles.containerWrapper}>
        <YZLayout className={styles.panelWrapper}>
          <div
            className={classNames(
              "flex",
              "relative",
              "w-full",
              "h-full",
              "justify-center",
              "overflow-hidden"
            )}
          >
            <div className={styles.container}>
              <YZLayout.Header>新对话</YZLayout.Header>
              <div className={styles.contentWrapper}>{children}</div>
            </div>
          </div>
        </YZLayout>
        <YZLayout className={styles.container}>
          <aside className={styles["sidebar-wrapper"]}>
            <aside className={styles.sidebar}>
              <div className={classNames("flex", "flex-col", "h-full")}>
                <SideHeader title="智能助手" />
                <NewChat name="新对话" />
                <SideScroll>
                  <SideContent contentList={contents} />
                  <Divider className={styles.divider} />
                  <HistoryConversation>最近对话列表</HistoryConversation>
                </SideScroll>
              </div>
            </aside>
          </aside>
        </YZLayout>
      </div>
    </YZLayout>
  );
};

export default LayoutWrapper;
