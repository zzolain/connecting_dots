//Actions
const SELECT_MENU = "SELECT_MENU";
const NAVIGATE_DIRECTION = "NEVIGATE_DIRECTION"

// Action Creators
function selectMenu(menuSelected) {
  return {
    type: SELECT_MENU,
    payload: menuSelected
  };
}

function navigateDirection(direction) {
  return {
    type: NAVIGATE_DIRECTION,
    payload: direction
  }
}

// Reducer
const menuState = {
  menuSelected: "Home",
  leftMenu: "About",
  rightMenu: "Study"
};


const initialState = {
    menuState: menuState,
    navigateDirection : 'initial'
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MENU:
      return applyMenuSelected(state, action.payload);

    case NAVIGATE_DIRECTION:
    return applyNavigateDirection(state, action.payload);

    default:
      return state;
  }
}

// Reducer Functions

function applyMenuSelected(state, payload) {
  switch (payload) {
    case "Home":
      return {
        ...state,
        menuState: {
          menuSelected: "Home",
          leftMenu: "About",
          rightMenu: "Study"
        }
      };

    case "About":
      return {
        ...state,
        menuState: {
          menuSelected: "About",
          leftMenu: "Study",
          rightMenu: "Home"
        }
      };

    case "Study":
      return {
        ...state,
        menuState: {
          menuSelected: "Study",
          leftMenu: "Home",
          rightMenu: "About"
        }
      };

    default:
      return state;
  }
}

function applyNavigateDirection(state, payload){
  return {
    ...state,
    navigateDirection: payload
  }
}

// Export Action Creators

const actionCreators = {
  selectMenu,
  navigateDirection
};

export { actionCreators };
// Export Reducer
export default reducer;
