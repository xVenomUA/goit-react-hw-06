
export const addNumber = (newContact) => {
  return {
    type: "numbers/addNumber",
    payload: newContact,
  };
};

export const deleteNumber = (numberId) => {
  return {
    type: "numbers/deleteNumber",
    payload: numberId,
  };
};

export const filterNumbers = (query) => {
  return {
    type: "filter/filterNumbers",
    payload: query,
  };
};