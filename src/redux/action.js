import { createAction } from "@reduxjs/toolkit";

export const addNumber = createAction("numbers/addNumber");

export const deleteNumber = createAction("numbers/deleteNumber");

export const filterNumbers = createAction("filter/filterNumbers");


// те що ми передаємо то це payload який ми передаємо в action; 