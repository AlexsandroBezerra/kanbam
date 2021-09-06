import { DEFAULT_DATA, STORAGE_KEY } from "../constants/storage";
import { List } from "../types";

export function saveDataInStorage(data: List[]) {
  const dataString = JSON.stringify(data);

  localStorage.setItem(STORAGE_KEY, dataString);
}

export function getDataFromStorage(): List[] {
  const dataString = localStorage.getItem(STORAGE_KEY);

  if (dataString) {
    const parsedData = JSON.parse(dataString);

    return parsedData;
  }

  return DEFAULT_DATA;
}
