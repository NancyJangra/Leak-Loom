const Card = ({title})=>{
    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}
import './App.css'
const App=()=>{
    return(
        <div><h1> Functional arrow component</h1>
            <Card title={"The lion king"}></Card>
            <Card title={"Star wars"}></Card>
            <Card title={"Avengers"}></Card>

        </div>

    )
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/

export default App
