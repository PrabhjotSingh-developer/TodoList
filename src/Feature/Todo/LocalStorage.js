// add local storage
// loadState function => get data from local storage
export const loadState = () => {
  try {
    const getData = localStorage.getItem("todos");
    return getData ? JSON.parse(getData) : undefined;
  } catch (error) {
    console.log("could not load the state");
    return undefined;
  }
};
// saveState function => save the state or todos data into local storage
export const saveState = (state) => {
  try {
    const saveData = JSON.stringify(state);
    localStorage.setItem("todos", saveData);
  } catch (error) {
    console.warn("could not save the state");
  }
};
