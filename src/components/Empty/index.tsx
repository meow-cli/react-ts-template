import React from 'react';
import { Empty } from 'antd';
import emptyImg from './empty.png';
import styles from './style.module.less';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IProps {
  description?: string;
  image?: string;
  position?: 'absolute' | 'inherit';
  className?: string;
}
const EmptyComp = (props: IProps) => {
  const { description, image, position = 'inherit', className } = props;
  const img = image ? image : emptyImg;
  return (
    <div
      className={cx([position === 'absolute' ? styles.emptyAbsolute : styles.emptyWrap, className])}
    >
      <Empty className={styles.empty} description={description} image={img} />
    </div>
  );
};

export default EmptyComp;
