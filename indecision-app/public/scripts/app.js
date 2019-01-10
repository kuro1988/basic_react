'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// *******************
// INDECISION APP
// *******************

// class App extends React.Component {
//   constructor(props) {
//     super(props)

//     this.deleteOptions = this.deleteOptions.bind(this)
//     this.pickRandom = this.pickRandom.bind(this)
//     this.addOption = this.addOption.bind(this)
//     this.deleteOption = this.deleteOption.bind(this)

//     this.state = {
//       options: []
//     }
//   }

//   componentDidMount() {
//     try {
//       const options = JSON.parse(localStorage.getItem('options'))

//       if (options) {
//         this.setState(() => ({options}))
//       }
//     } catch (error) {

//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.options.length !== this.state.options.length) {
//       const json = JSON.stringify(this.state.options)
//       localStorage.setItem('options', json)
//     }
//   }

//   deleteOptions () {
//     this.setState(() => ({options: []}))
//   }

//   /*

//   Questa funzione viene invocata quando clicco il REMOVE della singola opzione. L'onClick invoca la funzione e le passa il testo come argomento.

//   La funzione ha il compito di restituire un array aggiornato, quindi uso filter:

//   - da prevState accedo all'array iniziale

//   - filter itera ogni elemento dell'array e controlla che questo non sia uguale all'elemento passato come argomento della funzione

//   - tutti gli elementi che soddisfano il requisito option !== optionToRemove "passano" il test e sono quelli che verranno inclusi nell'array filtrato

//   - quelli che non passano il test, perché coincidono con l'elemento da eliminare, vengono scartati e non mantenuti nel nuovo array filtrato

//   */

//   deleteOption (optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => {
//         return option !== optionToRemove
//       })
//     }))
//   }

//   pickRandom () {
//     let choice = this.state.options[Math.floor(Math.random() * this.state.options.length)]
//     alert(choice)
//   }

//   addOption (option) {

//     if (!option) {
//       return 'Enter valid value to add item';
//     } else if (this.state.options.indexOf(option) > -1) {
//       return 'This option already exists';
//     }

//     this.setState((prevState) => {
//       return {
//         options: prevState.options.concat([option])
//       }
//     })
//   }

//   render () {

//     const props = {
//       title: 'Indecision App',
//       subtitle: 'Put your life in the hands of a computer',
//       random: 'Random'
//     }

//     return (
//       <div>
//         <Header {...props} />
//         <Action
//           hasOptions={this.state.options.length > 0}
//           pickRandom={this.pickRandom}
//         />
//         <Options
//           options={this.state.options}
//           deleteOptions={this.deleteOptions}
//           deleteOption={this.deleteOption}
//         />
//         <AddOption
//           addOption={this.addOption}
//         />
//       </div>
//     )
//   }
// }

// const Header = ({title, subtitle, ...rest}) => {

//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{subtitle}</h2>
//     </div>
//   )
// }

// const Action = (props) => {
//   return (
//     <div>
//       <button
//         onClick={props.pickRandom}
//         disabled={!props.hasOptions}
//       >
//         What should I do?
//       </button>
//     </div>
//   )
// }

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.deleteOptions}>Remove all</button>
//       <ul>
//         {props.options.map(option =>
//           <Option
//             key={option}
//             optionText={option}
//             deleteOption={props.deleteOption}
//           />
//         )}
//       </ul>
//     </div>
//   )
// }

// const Option = (props) => {
//   return (
//     <div>
//       {props.optionText}
//       <button onClick={() => {
//         props.deleteOption(props.optionText)
//       }}>Remove</button>
//     </div>
//   )
// }

// class AddOption extends React.Component {
//   constructor (props) {
//     super (props)
//     this.addOption = this.addOption.bind(this)
//   }
//   addOption (event) {
//     event.preventDefault()

//     const option = event.target.elements.option.value.trim()
//     if (option) {
//       this.props.addOption(option)
//       event.target.elements.option.value = ''
//     }
//   }
//   render () {
//     return (
//       <div>
//         <form onSubmit={this.addOption}>
//           <input type='text' name='option' />
//           <input type='submit' />
//         </form>
//       </div>
//     )
//   }
// }

// *******************
// COUNTER APP
// *******************

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.reset = _this.reset.bind(_this);

    _this.state = {
      count: props.count
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('count');
      var count = JSON.parse(json);
      this.setState(function () {
        return { count: count };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }, {
    key: 'addOne',
    value: function addOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'minusOne',
    value: function minusOne() {
      this.setState(function (prevState) {
        return { count: prevState.count - 1 };
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Counter: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.addOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.minusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.reset },
          'Reset'
        )
      );
    }
  }]);

  return App;
}(React.Component);

App.defaultProps = {
  count: 0

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

};ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
