import * as React from 'react';
import DownArrow from "./downarrow.png";
import './MultiSelectDropdown.css';

// Define data for Multiple Select Dropdown
// This data would ideally be defined back-end and we could load JSON objects
const multiDropData = [
    {id: 1, title: 'Iowa'},
    {id: 2, title: 'France'},
    {id: 3, title: 'Japan'}
  ];


// Dropdown with Multiple Select Capabilities

const MultiSelectDropdown = ({ options, selected, toggleOption }) => {

    // selectedArray holds the selected titles to be displayed in dropdown box
    let selectedArray = []
    for (let j = 0; j < multiDropData.length; j++) {
      if (selected.includes(multiDropData[j].id)) {
        selectedArray.push(multiDropData[j].title);
        selectedArray.push(", ");
      }
    }
  
    selectedArray = selectedArray.slice(0, selectedArray.length - 1); // gets rid of last ", "
  
    return (
      <div className='basic'>
        <label>
        Multiple Selected Options
        <div className="multi-select-dropdown">
         
          <div className="multi-select-dropdown_selected">
          <div>{selectedArray}</div>
          <img src={DownArrow} alt="downarrow" height="15"/>
          </div>
          <ul className="multi-select-dropdown_options">
            {options.map(option => {
              const isSelected = selected.includes(option.id);
              return (
                <li className="multi-select-dropdown_option" onClick={() => toggleOption({ id: option.id })}>
                    <input type="checkbox" checked={isSelected} className="multi-select-dropdown_option-checkbox"></input>
                    <span>{option.title}</span>
                </li>
              )
            })}
          </ul>
        </div>
        </label>
      </div>
    )
}

const SelectComponent = () => {
  const [selected, setSelected] = React.useState([])

  // After clicked, toggles whether option is selected or being unselected
  const toggleOption = ({ id }) => {
    setSelected(prevSelected => {
        const idArray = [...prevSelected]
        if (idArray.includes(id)) {
            return idArray.filter(item => item !== id)
        } else {
            idArray.push(id)
            return idArray;
        }
    })
  } 

  return (
    <MultiSelectDropdown options={multiDropData} selected={selected} toggleOption={toggleOption}/>
  )
}

export default SelectComponent;