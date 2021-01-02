// shall be deleted when the real reducers are created
const initialState = { test: 'It works' };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
