import React, { FC, PropsWithChildren } from 'react'
import { Space, Button } from '@douyinfe/semi-ui'
import classNames from 'classnames'
import styles from './index.module.scss'

const YZLayout: FC<PropsWithChildren<{ className?: string; style?: React.CSSProperties }>> = ({
  className,
  style,
  children
}) => {
  return (
    <div className={classNames(styles.layoutWrapper, className)} style={style}>
      {children}
    </div>
  )
}

const Header: FC<
  PropsWithChildren<{
    className?: string
    style?: React.CSSProperties
    simpleHeader?: boolean
    iconRender?: React.ReactNode
  }>
> = ({ className, style, simpleHeader = true, children, iconRender }) => {
  return (
    <div className={classNames(styles.header, className)} style={style}>
      <div className={classNames('relative')}>
        <div
          className={classNames(
            styles.container,
            { [styles['simple-header']]: simpleHeader },
            'z-10',
            'pointer-events-none'
          )}
        >
          <div className={styles.inner}>
            {children && (
              <div className={classNames(styles.left, 'overflow-hidden', 'flex-1')}>
                <Space
                  spacing={12}
                  className={classNames('w-full')}
                  style={{ paddingLeft: simpleHeader ? 12 : 20 }}
                >
                  {!simpleHeader && (
                    <>
                      {iconRender && iconRender}
                      <Button className={classNames('flex')}>新对话</Button>
                      <div className={classNames('w-[0.5px]', 'h-[30px]', 'bg-[#D9D9D9]')}></div>
                    </>
                  )}
                  <div className={classNames('flex-1', 'min-w-0')}>
                    <div
                      className={classNames(
                        'w-full',
                        'h-full',
                        'flex',
                        'flex-col',
                        'justify-center'
                      )}
                    >
                      <div className={classNames()}>{children}</div>
                    </div>
                  </div>
                </Space>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

type LayoutType = typeof YZLayout & { Header: typeof Header }
;(YZLayout as LayoutType).Header = Header

export default YZLayout as LayoutType
