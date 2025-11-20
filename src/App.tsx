import './App.css'

function App() {

  const tasks = [
    { id: 1, title: "Купить продукты на неделю", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
  ]

  return (
    <>
      <h1 className="title">To Do List</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" disabled checked={task.isDone} />
              <div>{task.title}</div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
