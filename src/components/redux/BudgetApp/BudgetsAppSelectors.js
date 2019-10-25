export const getExpenses = store => store.expenses;

export const getBudget = store => store.budget;

export const getExpensesSumm = store => {
  const result = store.expenses.reduce((sum, expens) => {
    return sum + expens.amount;
  }, 0);

  return result;
};

export const getBalans = store => {
  const result = store.expenses.reduce((sum, expens) => {
    return sum + expens.amount;
  }, 0);

  return store.budget - result;
};
