import { createContext, ReactNode, useCallback, useState } from "react";

import { Card, List } from "../types";

import { saveDataInStorage } from "../utils/storage";
import { generateID } from "../utils/generateID";

interface BoardContext {
  data: Array<List>;
  addList: (name: string) => void;
  removeList: (id: string) => void;
}

interface BoardContextProviderProps {
  children: ReactNode;
}

export const BoardContext = createContext({} as BoardContext);

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [data, setData] = useState<List[]>([]);

  function updateData(newData: List[]) {
    setData(newData);
    saveDataInStorage(newData);
  }

  const addList = useCallback(
    (name: string) => {
      const newList = {
        id: generateID(),
        name,
        cards: [] as Card[],
      };

      const newData = [...data];

      newData.push(newList);

      updateData(newData);
    },
    [data]
  );

  const removeList = useCallback(
    (id: string) => {
      const newData = data.filter((list) => {
        return list.id !== id;
      });

      updateData(newData);
    },
    [data]
  );

  return (
    <BoardContext.Provider value={{ data, addList, removeList }}>
      {children}
    </BoardContext.Provider>
  );
}
