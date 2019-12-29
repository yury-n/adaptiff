export const setSelectedLayout = layoutIndex => ({
  type: "SET_SELECTED_LAYOUT",
  payload: layoutIndex
});

export const setSelectedTab = tab => ({
  type: "SET_SELECTED_TAB",
  payload: tab
});

export const setIsQuickFormShown = value => ({
  type: "SET_IS_QUICK_FORM_SHOWN",
  payload: value
});

export const setQuickFormFieldValue = (field, value) => ({
  type: "SET_QUICK_FORM_FIELD_VALUE",
  payload: { field, value }
});
