import React from 'react'

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

export default AddOption
