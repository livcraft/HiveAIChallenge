import * as React from 'react';
import './BasicDropdown.css'

// Basic Dropdown Component - Single Selected Item using HTML's built in Dropdown menu
class BasicDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Hive'}; // Sets the beginning state to Hive

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}); 
  }

  render() {
    return (
        <div className='basic'>
            <label>
            Single Selected Option
            <form>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Hi">Hi</option>
                    <option value="Hive">Hive</option>
                    <option value="AI">AI</option>
                </select>
            </form>
            </label>
        </div>
    );
  }
}

export default BasicDropdown;