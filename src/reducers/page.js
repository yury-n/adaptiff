const initialState = {
  selectedLayout: 0,
  selectedTab: localStorage.getItem("app.page.selectedTab") || "templates",
  isQuickFormShown: localStorage.getItem("app.page.isQuickFormHidden")
    ? false
    : true,
  quickFormFieldValues: {},
  selectedLayoutMiddleLineY: undefined
};

const setSelectedLayout = (state, action) => ({
  ...state,
  selectedLayout: action.payload
});

const setSelectedTab = (state, action) => ({
  ...state,
  selectedTab: action.payload
});

const setIsQuickFormShown = (state, action) => ({
  ...state,
  isQuickFormShown: action.payload
});

const setQuickFormFieldValue = (state, action) => ({
  ...state,
  quickFormFieldValues: {
    ...state.quickFormFieldValues,
    [action.payload.field]: action.payload.value
  }
});

const handlers = {
  SET_SELECTED_LAYOUT: setSelectedLayout,
  SET_SELECTED_TAB: setSelectedTab,
  SET_IS_QUICK_FORM_SHOWN: setIsQuickFormShown,
  SET_QUICK_FORM_FIELD_VALUE: setQuickFormFieldValue
};

export default { initialState, handlers };
