
const setArrayInLocalStorage = (key, array) => {

    localStorage.setItem(key, JSON.stringify(array));
  };
  
  const getArrayFromLocalStorage = (key) => {
    const storedArray = localStorage.getItem(key);
    return storedArray ? JSON.parse(storedArray) : [0,0,0];
  };

  export {setArrayInLocalStorage, getArrayFromLocalStorage};