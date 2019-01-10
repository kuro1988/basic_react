import React from 'react'
import ReactDOM from 'react-dom'

// *******************
// INDECISION APP
// *******************

import AddOption from './components/AddOption'
import Option from './components/Option'
import Header from './components/Header'
import Action from './components/Action'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.deleteOptions = this.deleteOptions.bind(this)
    this.pickRandom = this.pickRandom.bind(this)
    this.addOption = this.addOption.bind(this)
    this.deleteOption = this.deleteOption.bind(this)

    this.state = {
      options: []
    }
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'))

      if (options) {
        this.setState(() => ({options}))
      }
    } catch (error) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  deleteOptions () {
    this.setState(() => ({options: []}))
  }

  /*

  Questa funzione viene invocata quando clicco il REMOVE della singola opzione. L'onClick invoca la funzione e le passa il testo come argomento.

  La funzione ha il compito di restituire un array aggiornato, quindi uso filter:

  - da prevState accedo all'array iniziale

  - filter itera ogni elemento dell'array e controlla che questo non sia uguale all'elemento passato come argomento della funzione

  - tutti gli elementi che soddisfano il requisito option !== optionToRemove "passano" il test e sono quelli che verranno inclusi nell'array filtrato

  - quelli che non passano il test, perché coincidono con l'elemento da eliminare, vengono scartati e non mantenuti nel nuovo array filtrato

  */

  deleteOption (optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionToRemove
      })
    }))
  }

  pickRandom () {
    let choice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    alert(choice)
  }

  addOption (option) {

    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render () {

    const props = {
      title: 'Indecision App',
      subtitle: 'Put your life in the hands of a computer',
      random: 'Random'
    }

    return (
      <div>
        <Header {...props} />
        <Action
          hasOptions={this.state.options.length > 0}
          pickRandom={this.pickRandom}
        />
        <Options
          options={this.state.options}
          deleteOptions={this.deleteOptions}
          deleteOption={this.deleteOption}
        />
        <AddOption
          addOption={this.addOption}
        />
      </div>
    )
  }
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove all</button>
      <ul>
        {props.options.map(option =>
          <Option
            key={option}
            optionText={option}
            deleteOption={props.deleteOption}
          />
        )}
      </ul>
    </div>
  )
}

// *******************
// COUNTER APP
// *******************

// class App extends React.Component {
//   constructor (props) {
//     super(props)

//     this.addOne = this.addOne.bind(this)
//     this.minusOne = this.minusOne.bind(this)
//     this.reset = this.reset.bind(this)

//     this.state = {
//       count: props.count
//     }
//   }

//   componentDidMount() {
//     const json = localStorage.getItem('count')
//     const count = JSON.parse(json)
//     this.setState(() => ({count}))
//   }

//   componentDidUpdate() {
//     const json = JSON.stringify(this.state.count)
//     localStorage.setItem('count', json)
//   }

//   addOne () {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   minusOne () {
//     this.setState((prevState) => {
//       return {count: prevState.count - 1}
//     })
//   }

//   reset () {
//     this.setState(() => {
//       return {
//         count: 0
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.addOne}>+1</button>
//         <button onClick={this.minusOne}>-1</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     )
//   }
// }

// App.defaultProps = {
//   count: 0
// }

// *******************
// VISIBILITY APP
// *******************

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       visibility: false
//     }

//     this.toggleVisibility = this.toggleVisibility.bind(this)
//   }

//   toggleVisibility () {
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility
//       }
//     })
//   }

//   render () {
//     return (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.toggleVisibility}>Show content</button>
//         { this.state.visibility && (
//           <p>Now you can see me!</p>
//         )
//         }
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('app'))


