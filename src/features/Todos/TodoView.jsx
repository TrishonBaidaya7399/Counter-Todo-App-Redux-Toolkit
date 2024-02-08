import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos  } from "./todoSlice";
import Cart from "./Cart";

const TodoView = () => {
  const [showAll, setShowAll] = useState(false);
  const { isLoading, todo, error } = useSelector((state) => state.todo);
  console.log(error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos ());
  }, [dispatch]);

  const displayAll = showAll ? todo : (todo ? todo.slice(0, 10) : []);
  return (
    <div>
      <h1>TODOs APP</h1>
      {isLoading && <p style={{backgroundColor:"transparent", color:"yellow"}}>Loading...</p>}
      {error && <p style={{backgroundColor:"transparent", color:"red"}}>Error: {error}</p>}
      {todo && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {displayAll.map((todo) => {
            return (
              <Cart key={todo?.id} todo={todo} />
            );
          })}
        </div>
      )}
      {showAll ? (
        <button
          onClick={() => {
            setShowAll(false);
          }}
          style={{
            marginInline: "auto",
            border: "2px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
            color: "black",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          See Less
        </button>
      ) : (
        <button
          onClick={() => {
            setShowAll(true);
          }}
          style={{
            marginInline: "auto",
            border: "2px solid black",
            backgroundColor: "white",
            borderRadius: "10px",
            color: "black",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default TodoView;
