import { createContext, ReactNode, useCallback, useState } from "react";

import { List } from "../types";

import { saveDataInStorage } from "../utils/storage";
import { generateID } from "../utils/generateID";

interface BoardContext {
  lists: List[];
  addList: (name: string) => void;
  removeList: (id: string) => void;
}

interface BoardContextProviderProps {
  children: ReactNode;
}

export const BoardContext = createContext({} as BoardContext);

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [lists, setLists] = useState<List[]>([]);

  function updateData(nesLists: List[]) {
    setLists(nesLists);
    saveDataInStorage(nesLists);
  }

  const addList = useCallback(
    (name: string) => {
      const newList = {
        id: generateID(),
        name,
        cards: [],
      };

      const nesLists = [...lists];

      nesLists.push(newList);

      updateData(nesLists);
    },
    [lists]
  );

  const removeList = useCallback(
    (id: string) => {
      const newData = lists.filter((list) => {
        return list.id !== id;
      });

      updateData(newData);
    },
    [lists]
  );

  return (
    <BoardContext.Provider value={{ lists, addList, removeList }}>
      {children}
    </BoardContext.Provider>
  );
}
