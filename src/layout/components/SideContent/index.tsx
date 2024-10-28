import { memo, FunctionComponent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconSearch, IconEdit, IconImage, IconDesktop } from '@douyinfe/semi-icons'
import classNames from 'classnames'
import styles from './index.module.scss'

export interface ContentItemProps {
  icon?: string
  title: string
  path: string
  isActive: boolean
  onSelected?: (key?: string) => void
}

const ContentItem: FunctionComponent<ContentItemProps> = ({
  icon,
  title,
  path,
  isActive,
  onSelected
}) => {
  const iconElement = useMemo(() => {
    if (icon === 'search') {
      return <IconSearch />
    }
    if (icon === 'write') {
      return <IconEdit />
    }
    if (icon === 'create-image') {
      return <IconImage />
    }
    if (icon === 'chat-with-doc') {
      return <IconDesktop />
    }
    return undefined
  }, [])

  return (
    <div
      className={classNames(styles['section-item'], { [styles.active]: isActive })}
      onClick={(e) => {
        e.stopPropagation()
        onSelected?.(path)
      }}
    >
      {icon && <div className={styles.icon}>{iconElement}</div>}
      <div className={styles.title} title={title}>
        {title}
      </div>
    </div>
  )
}

export interface ListProps {
  icon: string
  title: string
  path: string
}

const SideContent: FunctionComponent<{
  className?: string
  contentList: ListProps[]
  onSelected?: (key?: string) => void
}> = ({ className, contentList, onSelected }) => {
  const navigate = useNavigate()
  const [active, setActive] = useState<string | undefined>()

  return (
    <div className={classNames(className, styles.contentWrapper)}>
      {contentList.map((item) => {
        return (
          <ContentItem
            key={item.icon}
            icon={item.icon}
            path={item.path}
            title={item.title}
            isActive={item.path === active}
            onSelected={(key) => {
              if (item.path === key) {
                setActive(key)
              }
              onSelected?.(item.icon)
              navigate(item.path)
            }}
          />
        )
      })}
    </div>
  )
}

export default memo(SideContent)
