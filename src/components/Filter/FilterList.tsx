import { useDataContext } from "../../context/dataContext";
import './filter.css'

const Filters = () => {
     const {
       state: { data, isLoading,assignee},
       dataDispatch
     } = useDataContext();
  const assigneeNames = [...new Set(data.map(task => task.assignee))].filter(
    name => name !== ""
  );
  assigneeNames.unshift("All Assignee");

  return (
    <div className="filter-container">
      {!isLoading ? (
        <>
        
          {assigneeNames.map(name => {
             const isActive = assignee === name;
            return (
              <button
                className={`button btn-chip btn-outline ${
                  isActive ? "active" : ""
                }`}
                key={name}
                onClick={() => {
                  dataDispatch({ type: "SET_ASSIGNEE", payload: name });
                }}
              >
                {name}
              </button>
            );
          })}
        </>
      ) : (
        <p>...</p>
      )}
    </div>
  );
}

export default Filters