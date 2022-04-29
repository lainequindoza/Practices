import './App.css';
import GroceryApp from './Components/GroceryApp';
import AddGroceryItem from './Components/AddGroceryItem';
import { useEffect, useState } from 'react';

const App = () => {

const [ groceryItems, setGroceryItems ] = useState([]); 

  
  useEffect(() => {
    const items = [ 
      { name: 'Coffee', price: 75, status: 'Pending' },
      { name: 'Sugar', price: 30, status: 'Pending' },
      { name: 'Creamer', price: 25, status: 'Pending' }
    ];

  setGroceryItems( items ); 
  }, []);

  useEffect(() => {
    console.log(groceryItems)},
  [groceryItems]);

//ADDING NEW ITEMS TO THE GROCERY LIST
  const addNewItem = (newItem)=>{

    console.log(newItem);

    let currentItemList=groceryItems.splice(0);
    currentItemList.push({name: newItem, status: 'Pending'});
    // currentItemList.push({name: newItem, price: newPrice, status: 'Pending'});

    console.log( currentItemList );
    setGroceryItems( currentItemList );
  }

 
 //MARK ITEM AS BOUGHT
  const markAsBought = ( theItem ) => {
    console.log( theItem );

    let currentItemList = groceryItems.splice(0);

    /* Map */
    currentItemList.map( item => {
      if( item.name === theItem ){ item.status = 'Bought'; }
    });

    console.log( currentItemList );
    setGroceryItems( currentItemList );

  }

  const deleteItem = () => {
    const currentItemList = items.splice(0);

    setGroceryItems(currentItemList.filter(item => item.status != pending));
  }
  
  
  return (
  <div className="App">
    <h2>GROCERY LIST</h2>
    <AddGroceryItem addItemFunction={addNewItem}/> 
    {/* <AddGroceryItem addItemFunction={addNewItem} addPriceFunction={addNewPrice}/>  */}

  <table className="itemsContainer">
    <thead>
      <tr>
        <th className='tableHeader'>Item Name</th>
        <th className='tableHeader'>Item Price</th>
        <th className='tableHeader'>Item Status</th>
      </tr>
    </thead>
    <tbody>
    {
    groceryItems.map( item => 
    <GroceryApp key={item.name} name={item.name} price={item.price} status={item.status} updatedItemsFunction={markAsBought}/>
    )}
    </tbody>
  </table>
  </div>
  )};

export default App;
