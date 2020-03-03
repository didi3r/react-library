export const loadState = () => {
  try {
    let state = localStorage.getItem("state");
    state = !!state ? JSON.parse(state) : null;
    console.log("Loading persisted state", state);
    return state;
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch {
    console.log("Couldn't persist state");
  }
};
