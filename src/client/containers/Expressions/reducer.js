
// initial state
const containerInitialState = {
  entries: []
};

// constants
const containerActions = {
  CREATE_ENTRY: 'babyloggr/expressions/create-entry'
};

// actions
export const createEntry = entry => ({
  type: containerActions.CREATE_ENTRY,
  entry,
});

// reducer
export const ExpressionsReducer = (state = containerInitialState, action) => {
  switch (action.type) {
    case containerActions.CREATE_ENTRY:
      return {
        ...state,
        entries: [...state.entries, action.entry]
      };
    default:
      return state;
  }
};
