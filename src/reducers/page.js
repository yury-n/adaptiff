const initialState = {
  selectedLayout: 0,
  selectedTab: localStorage.getItem("app.page.selectedTab") || "templates"
};

const setSelectedLayout = (state, action) => ({
  ...state,
  selectedLayout: action.payload
});

const setSelectedTab = (state, action) => ({
  ...state,
  selectedTab: action.payload
});

const handlers = {
  SET_SELECTED_LAYOUT: setSelectedLayout,
  SET_SELECTED_TAB: setSelectedTab
};

export default { initialState, handlers };
