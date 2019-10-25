import React from 'react';
import styles from './styles.module.css';
import BudgetForm from './BudgetForm/BudgetContainer';
import ValueBudget from './ValueBudget/VakueBudgetContainer';
import ExpenseForm from './ExpenseForm/ExpenseFormContainer';
import ExpensesTable from './ExpensesTable/ExpenseTableContainer';

const App = () => {
  return (
    <>
      <div className={styles.container}>
        <BudgetForm />
        <ValueBudget />
        <ExpenseForm />
        <ExpensesTable />
      </div>
    </>
  );
};

export default App;
