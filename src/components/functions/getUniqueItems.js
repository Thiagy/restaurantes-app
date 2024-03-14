


export default function getUniqueItems (cartItems){

    const uniqueItemsMap = new Map();
  
    cartItems.forEach((item) => {

      if (uniqueItemsMap.has(item._id)) {

        const existingItem = uniqueItemsMap.get(item._id);

        existingItem.price = parseFloat(existingItem.price.toFixed(2));
        
        existingItem.price += parseFloat(item.price);
        existingItem.quantity += 1;

        existingItem.price.toFixed(2)
        
      } else {
        
        uniqueItemsMap.set(item._id, { ...item, quantity: 1, price: parseFloat(item.price)});
      }

    });
    return Array.from(uniqueItemsMap.values());
  };