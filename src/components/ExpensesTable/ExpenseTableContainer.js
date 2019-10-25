import { connect } from 'react-redux';
import { getExpenses } from '../redux/BudgetApp/BudgetsAppSelectors';
import { dellExpens } from '../redux/BudgetApp/BudgetAppActions';
import { ExpensesTable } from './ExpensesTable';

const mapStateToProps = store => ({
  items: getExpenses(store),
});

const mapDispatchToProps = {
  dellExpens,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
