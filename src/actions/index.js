export const addUser = (user_Name, confirm_pass) => {
  return {
    type: "ADD_USER",
    user: user_Name,
    pass: confirm_pass,
  };
};
