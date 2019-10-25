import { connect } from 'react-redux';
import { setExpenses } from '../redux/BudgetApp/BudgetAppActions';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = {
  setExpenses,
};

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
