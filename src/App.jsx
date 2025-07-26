import './App.css'

function getTitle(title){
  return title;
}

function App() {

  return (
    <div>
      <h1>Hello world of {getTitle("React")}</h1>

      <form action="">
        <label htmlFor="search"></label>
        <input type="search" name="search" id="search" />
      </form>
    </div>
  )
}

export default App
