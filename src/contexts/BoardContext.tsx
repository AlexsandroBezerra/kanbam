import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { List } from "../types";

import { saveDataInStorage, getDataFromStorage } from "../utils/storage";
import { generateID } from "../utils/generateID";

interface BoardContext {
  lists: List[];
  addList: (name: string) => void;
  removeList: (id: string) => void;
  renameList: (id: string, name: string) => void;
}

interface BoardContextProviderProps {
  children: ReactNode;
}

export const BoardContext = createContext({} as BoardContext);

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    setLists(getDataFromStorage());
  }, []);

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

  const renameList = useCallback(
    (id: string, name: string) => {
      const newData = lists.map((list) => {
        if (list.id === id) {
          list.name = name;
        }

        return list;
      });

      updateData(newData);
    },
    [lists]
  );

  return (
    <BoardContext.Provider value={{ lists, addList, removeList, renameList }}>
      {children}
    </BoardContext.Provider>
  );
}
