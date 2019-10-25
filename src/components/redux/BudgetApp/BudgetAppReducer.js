import { combineReducers } from 'redux';

import Type from '../type';

const budgetReducer = (budget = 0, { type, payload }) => {
  switch (type) {
    case Type.ADDbudget:
      return payload;
    default:
      return budget;
  }
};

const expensesReducer = (expenses = [], { type, payload }) => {
  switch (type) {
    case Type.ADDexpenses:
      return [payload, ...expenses];
    case Type.REMOVEexpenses:
      return expenses.filter(expens => expens.id !== payload);

    default:
      return expenses;
  }
};

export const rootReducer = combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
