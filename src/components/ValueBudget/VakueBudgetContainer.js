import { connect } from 'react-redux';
import {
  getBudget,
  getExpensesSumm,
  getBalans,
} from '../redux/BudgetApp/BudgetsAppSelectors';
import { Values } from './ValueBudget';

const mapStateToProps = store => ({
  budget: getBudget(store),
  expenses: getExpensesSumm(store),
  balance: getBalans(store),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
