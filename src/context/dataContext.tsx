import {
  useContext,
  createContext,
  useReducer,
  useEffect,
  ReactNode,
} from "react";
import { dataReducer } from "../reducers/dataReducer";
import { getTasks } from "../services";
import { Task } from "../definitions";

interface DataContextProviderProps {
  children: ReactNode;
}
interface DataState {
  data: Task[];
  searchFor: string;
  isLoading: boolean;
  assignee: string;
  priority: string;
}
type DataAction =
  | { type: "GET_DATA"; payload: { isLoading: boolean; tasks: Task[] } }
  | { type: "SEARCH_FOR"; payload: string }
  | { type: "SET_ASSIGNEE"; payload: string }
  | { type: "SET_PRIORITY"; payload: string }
  | { type: "CLEAR" };

interface DataContextValue {
  state: DataState;
  dataDispatch: React.Dispatch<DataAction>;
}

const dataContext = createContext<DataContextValue>({
  state: {
    data: [],
    searchFor: "",
    isLoading: true,
    assignee: "All Assignee",
    priority: "",
  },
  dataDispatch: () => {},
});

const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}) => {
  const [state, dataDispatch] = useReducer(dataReducer, {
    data: [],
    searchFor: "",
    isLoading: true,
    assignee: "All Assignee",
    priority: "",
  });

  useEffect(() => {
    (async function () {
      try {
        const tasks = await getTasks();
        dataDispatch({
          type: "GET_DATA",
          payload: { isLoading: false, tasks },
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <dataContext.Provider value={{ state, dataDispatch }}>
      {children}
    </dataContext.Provider>
  );
};

const useDataContext = () => useContext(dataContext);

export { useDataContext, DataContextProvider };
