import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={css['transaction-history']}>
    <thead className={css.thead}>
      <tr>
        <th className={css.title}>Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr className={css.line} key={item.id}>
          <td className={css.value__title}>{item.type}</td>
          <td className={css.value}>{item.amount}</td>
          <td className={css.value}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
