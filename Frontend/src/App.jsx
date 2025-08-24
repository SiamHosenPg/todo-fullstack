import { TodoProvider } from "./context/TodoDatacontext";
import Home from "./page/Home";

function App() {
  return (
    <TodoProvider>
      <div className=" bg-Background-Second">
        <Home />
      </div>
    </TodoProvider>
  );
}

export default App;
