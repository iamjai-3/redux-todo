import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddTodo = () => {
  const storeData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>REDUX_TODO</h2>
      <h3>
        {storeData.map((data) => (
          <div key={data.id}>
            <p>
              {data.todo}:{data.id}
            </p>
          </div>
        ))}
      </h3>
    </div>
  );
};

export default AddTodo;
