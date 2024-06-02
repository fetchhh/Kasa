/**
 * Update states.
 * @param {string} key - The key of the object.
 * @param {function} setState - The function to update a state.
 */
export const toggleState = (key, setState) => {
  setState((previousState) => ({
    ...previousState,
    [key]: !previousState[key],
  }));
};
