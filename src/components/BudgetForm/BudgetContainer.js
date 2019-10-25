import { connect } from 'react-redux';
import { setBudgest } from '../redux/BudgetApp/BudgetAppActions';
import { BudgetForm } from './BudgetForm';

const mapDispatchToProps = {
  setBudgest,
};

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
