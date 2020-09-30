export const getUsersList = (list) => list.map(item => ({
  ...item,
  _id: item.login.uuid,
  isSelected: false
}));
