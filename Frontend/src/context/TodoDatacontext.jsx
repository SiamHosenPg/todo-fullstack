import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// 1️⃣ Create Context
export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const API_URL = import.meta.env.VITE_TODODATA_API; // change to your backend URL

  // 2️⃣ Fetch All Todos from API
  const fetchTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  // 3️⃣ Add Todo
  const addTodo = async (newTodo) => {
    try {
      const res = await axios.post(API_URL, newTodo);
      setTodos([...todos, res.data]); // update state with new todo
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  // 4️⃣ Update Todo
  const updateTodo = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedData);
      setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  // 5️⃣ Delete Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  // 6️⃣ Fetch todos when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
