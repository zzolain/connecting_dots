//  Actions
const TOGGLE_WINDOW_MENU = 'TOGGLE_WINDOW_MENU'
const SELECT_MENU = 'SELECT_MENU'
const NAVIGATE_DIRECTION = 'NEVIGATE_DIRECTION'
const LOGO_PLAYED = 'LOGO_PLAYED'

// Action Creators
function toggleWindowMenu(switchValue) {
  return {
    type: TOGGLE_WINDOW_MENU,
    payload: switchValue
  }
}

function selectMenu(menuSelected) {
  return {
    type: SELECT_MENU,
    payload: menuSelected
  }
}

function navigateDirection(direction) {
  return {
    type: NAVIGATE_DIRECTION,
    payload: direction
  }
}

function logoPlayed(played) {
  return {
    type: LOGO_PLAYED,
    payload: played
  }
}

// Reducer Functions
function applyToogleWindowMenu(state, payload) {
  switch (payload) {
  case true:
    return {
      ...state,
      windowMenuState: true
    }

  case false:
    return {
      ...state,
      windowMenuState: false
    }

  default:
    return state
  }
}

function applyMenuSelected(state, payload) {
  switch (payload) {
  case 'home':
    return {
      ...state,
      menuState: {
        menuSelected: 'home',
        leftMenu: 'about',
        rightMenu: 'project'
      }
    }

  case 'about':
    return {
      ...state,
      menuState: {
        menuSelected: 'about',
        leftMenu: 'project',
        rightMenu: 'home'
      }
    }

  case 'project':
    return {
      ...state,
      menuState: {
        menuSelected: 'project',
        leftMenu: 'home',
        rightMenu: 'about'
      }
    }

  default:
    return state
  }
}

function applyNavigateDirection(state, payload) {
  return {
    ...state,
    navigateDirection: payload
  }
}

function applyLogoPlayed(state, payload) {
  switch (payload) {
  case true:
    return {
      ...state,
      logoPlayed: true
    }
  case false:
    return {
      ...state,
      logoPlayed: false
    }
  default:
    return state
  }
}

// Reducer

const menuState = {
  menuSelected: 'home',
  leftMenu: 'about',
  rightMenu: 'project'
}

const initialState = {
  windowMenuState: false,
  menuState: menuState,
  navigateDirection: null,
  logoPlayed: false
}

function reducer(state = initialState, action) {
  switch (action.type) {
  case TOGGLE_WINDOW_MENU:
    return applyToogleWindowMenu(state, action.payload)

  case SELECT_MENU:
    return applyMenuSelected(state, action.payload)

  case NAVIGATE_DIRECTION:
    return applyNavigateDirection(state, action.payload)

  case LOGO_PLAYED:
    return applyLogoPlayed(state, action.payload)

  default:
    return state
  }
}

// Export Action Creators

const actionCreators = {
  toggleWindowMenu,
  selectMenu,
  navigateDirection,
  logoPlayed
}

export { actionCreators }

// Export Reducer
export default reducer
