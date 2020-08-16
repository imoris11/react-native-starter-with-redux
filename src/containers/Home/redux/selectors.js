import { createSelector, createStructuredSelector } from 'reselect';
const usersObject = (state = {}) => state.users;
const users = (obj = {}) => obj.data;

const getUsers = createSelector(usersObject, users);

export const selectors = createStructuredSelector({
  user: getUsers,
});

export default selectors;
