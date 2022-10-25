const initialState = { pruthvirajgaikwad17: "12345", aditya: "12345" };

const addTheUser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("Add User", action.user, action.pass);
      state[action.user] = action.pass;
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default addTheUser;
