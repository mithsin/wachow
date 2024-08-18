import { v4 as uuidv4 } from 'uuid';
import styles from './SizeInputField.module.scss';

import { TextInput } from 'components/Atoms/Inputs';
import { PlusIcon, MinusIcon } from 'components/Atoms/Icons';

export const SizeInputField = ({itemSize, setItemSize}) => {

  const formInputSizeChange = (e) => {
    const checkDollar = /^\$?[0-9]+\.?[0-9]?[0-9]?$/;
    const dollar = (e.target.name === "price") && !e.target.value ? 0 : e.target.value;
    const sizeId = e.target.getAttribute('data-sizeid');

    if((e.target.name === "price" && checkDollar.test(dollar)) || e.target.name === "name"){
        const updateSizeInput = (
            itemSize.map((item)=> {
              return (sizeId === item.id) ? {...item, [e.target.name] : e.target.value} : item
            })
        )
        setItemSize(updateSizeInput)
    }
};

  const addInput = () => {
    setItemSize(itemSize.concat({
      id: uuidv4(),
      name: "", 
      price: ""
    }))     
  }
  const removeInput = (id) => {
    setItemSize(itemSize.filter(size => size.id !== id))     
  }

  return itemSize
    ? (
      itemSize?.map((inputSize, i)=> {
        const isLast = (itemSize.length - 1) === i;
        return (
          <div key={inputSize.id}  className={styles['sizeBlock']}>
            <TextInput 
              name='name'
              label="size"
              type="text"
              placeholder="size"
              data-sizeid={inputSize.id}
              value={inputSize?.name ?? ''}
              onChange={ formInputSizeChange } />
            <TextInput
              name='price'
              label="price"
              type="text"
              placeholder="price"
              data-sizeid={inputSize.id}
              value={inputSize?.price ?? ''}
              onChange={ formInputSizeChange } />
            { isLast 
              ? <span className={styles.sizeIcon}>
                <PlusIcon size="1x" className={styles.plusIcon} onClick={addInput}/>
              </span>
              : <span className={styles.sizeIcon}>
                  <MinusIcon size="1x" className={styles.MinusIcon} onClick={()=>removeInput(inputSize.id)}/>
                </span>
            }
          </div>
        )
      })
    )
    : null

  
}
