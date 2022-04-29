import {useState} from 'react';

const AddGroceryItem = ({addItemFunction}) => {

    const [newItem, setNewItem] =useState('');
    // const [newPrice, setNewPrice] =useState('');

    const UpdateItems = (e) => {
        e.preventDefault();
        addItemFunction(newItem);
        // addPriceFunction(newPrice);
        setNewItem('');
        // setNewPrice('');
    }
    return (
        <>
        <input type='text' placeholder='Add new item...' onChange={(e)=> setNewItem(e.target.value)} value={newItem}/>
        <br/>{/* <input type='text' onChange={(e)=> setNewPrice(e.target.value)} value={newPrice}/> */}
        <button onClick={e => UpdateItems(e)}>ADD</button>
        </>
    )
  }

  export default AddGroceryItem;