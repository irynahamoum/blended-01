import style from './CryptoHistory.module.css';
import { formatCryptoDate } from '../../helpers/formattingDateFn.js';
const tableHeaders = ['№', 'price', 'amount', 'date'];

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          {tableHeaders.map(item => (
            <th key={item} className={style.th}>
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, index) => (
          <tr key={id} className={style.tr}>
            <td className={style.td}>{index + 1}</td>
            <td className={style.td}>{price}</td>
            <td className={style.td}>{amount}</td>
            <td className={style.td}>{formatCryptoDate(date)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
