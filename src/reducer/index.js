//Actions
const SELECT_MENU = "SELECT_MENU";

// Action Creators
function selectMenu(menuSelected) {
  return {
    type: SELECT_MENU,
    payload: menuSelected
  };
}

// Reducer
const menuState = {
  menuSelected: "Home",
  leftMenu: "About",
  rightMenu: "Study"
};


const initialState = {
    menuState: menuState
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_MENU:
      return applyMenuSelected(state, action.payload);


    default:
      return state;
  }
}

// Reducer Functions

function applyMenuSelected(state, payload) {
  switch (payload) {
    case "Home":
      return {
        menuState: {
          menuSelected: "Home",
          leftMenu: "About",
          rightMenu: "Study"
        }
      };

    case "About":
      return {
        menuState: {
          menuSelected: "About",
          leftMenu: "Study",
          rightMenu: "Home"
        }
      };

    case "Study":
      return {
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


// Export Action Creators

const actionCreators = {
  selectMenu,
};

export { actionCreators };
// Export Reducer
export default reducer;
