const cart = [];

const addLast = () => {
  const itemValue = item.value.trim(); 


  if (itemValue  == "") {
    errorMsg.style.display = "block";
    document.getElementById("item").value = "";
  } 



  else {
    errorMsg.style.display = "none"; 
    cart.push(itemValue); 
    document.getElementById("item").value = ""; 
    console.log(cart);

    if (cart.length === 1) {
      document.getElementById("placeholderText").style.display = "none";
      document.getElementById("tab").style.display = "table";
    }

    if (cart.length >= 1) {
      btnDelete.style.display = "block";
      btnAddBegin.style.display = "block";
      btnRemoveBegin.style.display = "block";
      btnRemoveLast.style.display = "block";
      btnEditItem.style.display = "block";
      btnClearCart.style.display = "block";
      document.getElementById("tab").style.display = "table";
    }

    displayItem();
  }
};

const displayItem = () => {
  tb.innerHTML = ""; 
  
  for(let i = 0; i < cart.length; i++) {
    tb.innerHTML += `<tr>
        <th>${i + 1}</th>
        <th>${cart[i]}</th>
    </tr>`;
  }

  // cart.forEach((data, Sam) => {
  // tb.innerHTML += `<tr>
  //     <th>${Sam + 1}</th>
  //     <th>${data}</th>
  // </tr>`;
  // });

  if (cart.length === 0) {
    btnDelete.style.display = "none";
    btnAddBegin.style.display = "none";
    btnRemoveBegin.style.display = "none";
    btnRemoveLast.style.display = "none";
    btnEditItem.style.display = "none";
    btnClearCart.style.display = "none";
    document.getElementById("tab").style.display = "none";
    document.getElementById("placeholderText").style.display = "block";
  }
  
};



const deleteItem = () => {
  if(cart.length >=1) {
    const userValue = Number(prompt("Enter the number you want to delete"))
    console.log(userValue);
    
    if (userValue < 1) {
      console.log(userValue);
    } else if(userValue <= cart.length){
      cart.splice(userValue-1, 1)
      displayItem();

      if (cart.length < 1){
        btnDelete.style.display = "none";
      }
    } else{
      alert("invalid number entered")
    }
  }
}







const addBegin = () => {
  if (cart.length >= 1) {
    const startValue = prompt("Enter the item you want to add at the beginning");
    if (!startValue || startValue.trim() === "") {
      alert("Invalid input. Please enter a valid item.");
    } else {
      cart.unshift(startValue);
      displayItem();
    }
  } else {
    alert("The cart is empty. Add items to the cart first.");
  }
};



const removeBegin = () => {
  if (cart.length >= 1) {
    const removedFirstItem = cart.shift();
    displayItem();
    alert(`Removed item: ${removedFirstItem}`);
  } else {
    alert("The cart is empty. Add items to the cart first.");
  }
}

const removeLast = () => {
  if (cart.length >= 1) {
    const removedLastItem = cart.pop();
    displayItem(); 
    alert(` "Removed item: ${removedLastItem} , this section is irreversible oo`); 

   
  } else {
    alert("The cart is empty. Add items to the cart first.");
  }
};



const editItem = () => {
  if (cart.length >= 1) {
    const itemNumber = Number(prompt("Enter the number of the item you want to edit:"));
    
    if (isNaN(itemNumber)  || itemNumber < 1 || itemNumber > cart.length) {
      alert("Invalid number. Please enter a valid item number.");
      document.getElementById("itemNumber").value = "";
    }

    const newItem = prompt("Enter the new item to replace it:");
    
    if (!newItem || newItem.trim() === "") {
      alert("Invalid input. Please enter a valid item.");
      document.getElementById("itemNumber").value = "";
    }

    cart.splice(itemNumber - 1, 1, newItem); 
    displayItem(); 
    // alert(`Item number ${itemNumber} has been updated to "${newItem}".`);
  } else {
    alert("The cart is empty. Add items to the cart first.");
  }
};



const clearCart = () => {
  if (cart.length >= 1) {
    const confirmClear = confirm("Are you sure you want to delete all items in the cart?");
    if (confirmClear) {
      cart.length = 0; 
      displayItem(); 
      // alert("All items have been deleted from the cart.");
      
      btnDelete.style.display = "none";
      btnAddLast.style.display = "none";
      btnRemoveBegin.style.display = "none";
      btnRemoveLast.style.display = "none";
      btnEditItem.style.display = "none";
    }
  } else {
    alert("The cart is already empty.");
  }
};













