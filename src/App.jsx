import './App.css'
import CounterView from './features/Counter/CounterView'
import TodoView from './features/Todos/TodoView'

function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterView/>
      <TodoView/>
    </>
  )
}

export default App
