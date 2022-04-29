const GroceryApp = ({name, price, status, updatedItemsFunction}) => {
    return (
        <tr>
            <td className='tableHeader'>{name}</td>
            <td className='tableHeader'>Php {price}</td>
            <td className='tableHeader'>
                {status === 'Pending' && <img alt="Bought" src="https://cdn-icons.flaticon.com/png/512/1052/premium/1052866.png?token=exp=1651165169~hmac=4583359620f3de01e27befdb5e42c87c" onClick={ () => updatedItemsFunction(name) } /> }
                <img alt="Remove" src="https://cdn-icons-png.flaticon.com/512/189/189690.png"/>
            </td>
        </tr>
    )
  }

  export default GroceryApp;
  