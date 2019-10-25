import Type from '../type';

export const setBudgest = value => ({
  type: Type.ADDbudget,
  payload: value,
});

export const setExpenses = value => ({
  type: Type.ADDexpenses,
  payload: value,
});

export const dellExpens = value => ({
  type: Type.REMOVEexpenses,
  payload: value,
});
