const STORAGE_KEY = '@kanbam/data'

export function saveDataInStorage(data: any) {
  const dataString = JSON.stringify(data)

  localStorage.setItem(STORAGE_KEY, dataString)
}

export function getDataFromStorage() {
  const dataString = localStorage.getItem(STORAGE_KEY)

  const parsedData = JSON.parse(dataString)

  return parsedData
}
