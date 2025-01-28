import { useState } from "react";
import { TextInput } from 'components/Atoms/Inputs';
import { ChevronUp, ChevronDown } from 'components/Atoms/Icons';
import styles from './Dropdown.module.scss';

export const Dropdown = ({
  items,
  onClick,
  dropdownInput,
  formInputChange
}) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items?.[0] ?? 'main')
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const onSelected = (selectItem) => {
    setSelectedItem(selectItem)
    setOpen(false)
    onClick(selectItem)
  }

  const onChangeName = (e) => {
    if(e.key === 'Enter'){
      setOpen(false)
    }
  }

  return (
    <div className="">
      <div className={styles.dowpdownInputWrapper}>
        <span className={styles.dowpdownInput}>
          <TextInput 
            { ...dropdownInput } 
            key={dropdownInput.name} 
            wrapperType='regularNoMargin'
            placeholder={selectedItem}
            onChangeValue={setSelectedItem}
            value={dropdownInput.value}
            onChange={ formInputChange } />
        </span>
        <span className={styles.dowpdownButton}>
          <button
            type="button"
            className=""
            onClick={handleToggle}
          >
              {open ? <ChevronUp size="1x"/> : <ChevronDown size="1x"/>}
          </button>
        </span>
      </div>
      {open && (
        <div className="">
          <ul className={styles.dropDown}>
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => onSelected(item)}
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Dropdown;