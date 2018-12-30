'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// *******************
// INDECISION APP
// *******************

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.deleteOptions = _this.deleteOptions.bind(_this);
    _this.pickRandom = _this.pickRandom.bind(_this);
    _this.addOption = _this.addOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'deleteOptions',
    value: function deleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'pickRandom',
    value: function pickRandom() {
      var choice = this.state.options[Math.floor(Math.random() * this.state.options.length)];
      alert(choice);
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var props = {
        title: 'Indecision App',
        subtitle: 'Put your life in the hands of a computer',
        random: 'Random'
      };

      return React.createElement(
        'div',
        null,
        React.createElement(Header, props),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          pickRandom: this.pickRandom
        }),
        React.createElement(Options, {
          options: this.state.options,
          deleteOptions: this.deleteOptions
        }),
        React.createElement(AddOption, {
          addOption: this.addOption
        })
      );
    }
  }]);

  return App;
}(React.Component);

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      rest = _objectWithoutProperties(_ref, ['title', 'subtitle']);

  console.log(rest);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      title
    ),
    React.createElement(
      'h2',
      null,
      subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.pickRandom,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.deleteOptions },
      'Remove all'
    ),
    React.createElement(
      'ul',
      null,
      props.options.map(function (option) {
        return React.createElement(Option, { key: option, optionText: option });
      })
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'li',
    null,
    props.optionText
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.addOption = _this2.addOption.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'addOption',
    value: function addOption(event) {
      event.preventDefault();

      var option = event.target.elements.option.value.trim();
      if (option) {
        this.props.addOption(option);
        event.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.addOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement('input', { type: 'submit' })
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
