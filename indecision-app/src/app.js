const app = {
  title: 'Indecision App',
  subtitle: 'Inser the options in the box',
  options: []
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'Nothing to show'}</p>
    <ol>
      <li>First</li>
      <li>Second</li>
    </ol>
  </div>

)

let count = 0

const addOne = () => {
  count++
  renderCounterApp()
}

const minusOne = () => {
  count--
  renderCounterApp()
}

const reset = () => {
  count = 0
  renderCounterApp()
}

const appRoot = document.querySelector('#app')

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

  ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp()