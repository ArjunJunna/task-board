import { Task } from "../definitions";

interface DataState {
  data: Task[];
  searchFor: string;
  isLoading: boolean;
  assignee:string;
  priority:string;
}

type DataAction =
  | { type: "GET_DATA"; payload: { isLoading: boolean; tasks: Task[] } }
  | { type: "SEARCH_FOR"; payload: string }
  | { type: "SET_ASSIGNEE"; payload: string }
  | { type: "SET_PRIORITY"; payload: string }
  | { type: "CLEAR" };

const dataReducer = (state: DataState, action: DataAction) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        isLoading: action.payload.isLoading,
        data: [...action.payload.tasks],
      };
    case "SEARCH_FOR":
      return { ...state, searchFor: action.payload };
    case "SET_ASSIGNEE":
      return { ...state, assignee: action.payload };
    case "SET_PRIORITY":
      return { ...state, priority: action.payload };
    case "CLEAR":
      return {
        ...state,
        searchFor: "",
      };
    default:
      return state;
  }
};

export { dataReducer };
