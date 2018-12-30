// *******************
// INDECISION APP
// *******************

class App extends React.Component {
  constructor(props) {
    super(props)

    this.deleteOptions = this.deleteOptions.bind(this)
    this.pickRandom = this.pickRandom.bind(this)
    this.addOption = this.addOption.bind(this)

    this.state = {
      options: []
    }
  }

  deleteOptions () {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  pickRandom () {
    let choice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    alert(choice)
  }

  addOption (option) {
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
        />
        <AddOption
          addOption={this.addOption}
        />
      </div>
    )
  }
}

const Header = ({title, subtitle, ...rest}) => {
  console.log(rest)
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  )
}

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.pickRandom}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove all</button>
      <ul>
        {props.options.map(option => <Option key={option} optionText={option} />)}
      </ul>
    </div>
  )
}

const Option = (props) => {
  return (
    <li>{props.optionText}</li>
  )
}

class AddOption extends React.Component {
  constructor (props) {
    super (props)
    this.addOption = this.addOption.bind(this)
  }
  addOption (event) {
    event.preventDefault()

    const option = event.target.elements.option.value.trim()
    if (option) {
      this.props.addOption(option)
      event.target.elements.option.value = ''
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type='text' name='option' />
          <input type='submit' />
        </form>
      </div>
    )
  }
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


