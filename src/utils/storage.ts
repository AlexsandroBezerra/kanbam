import { List } from "../types";

const STORAGE_KEY = "@kanbam/data";
const defaultData: List[] = [];

export function saveDataInStorage(data: any) {
  const dataString = JSON.stringify(data);

  localStorage.setItem(STORAGE_KEY, dataString);
}

export function getDataFromStorage(): List[] {
  const dataString = localStorage.getItem(STORAGE_KEY);

  if (dataString) {
    const parsedData = JSON.parse(dataString);

    return parsedData;
  }

  return defaultData;
}
