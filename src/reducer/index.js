//Actions
const SELECT_MENU = "SELECT_MENU";

// Action Creators
function selectMenu(menuSelected) {
    return {
        type: SELECT_MENU,
        payload: menuSelected

    }
}

// Reducer
const initialState = {
    menuSelected : "Home"
}

function reducer(state = initialState, action){
    switch(action.type){
        case SELECT_MENU:
        return applyMenuSelected(state, action.payload);
        
        default:
        return state;
    }
}

// Reducer Functions

function applyMenuSelected(state, payload){
    return {
        ...state,
        menuSelected: payload
    }
}

// Export Action Creators

const actionCreators = {
    selectMenu
}

export { actionCreators }
// Export Reducer
export default reducer;
