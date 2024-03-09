import style from './Statistics.module.css';

import { IconContext } from 'react-icons';

export const StatisticsItem = ({ total, title, icon }) => {
  return (
    <li className={style.item}>
      <IconContext.Provider value={{ size: 30, color: 'brown' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </li>
  );
};
