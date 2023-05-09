class ClothingItem {  // a class for the clothing item
    constructor(name, price, description) { //The constructor initializes the properties of the item
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }
  
  class ClothingMenu { // a class for the clothing menu
    constructor() {  
      this.items = []; // initializes an empty array of items
    }
  
    addItem(item) { // to add a new item to the clothing menu
      this.items.push(item);
    }
  
    deleteItem(i) {  // to delete an item from the clothing menu by index
      this.items.splice(i, 1); // i indicates starting position on index, 1 indicates how many items of the array we want remove
    }
  
    
    displayMenu() { // to display all items on the clothing menu
      console.log("Clothing Menu:"); 
      this.items.forEach((item, i) => {  // for each loops through the items array logging each items properties
        console.log(`${i + 1}. ${item.name} - ${item.price} - ${item.description}`);
      });
    }
  }
  
  
  let defaultItems = [  // Define an array of default clothing items
    new ClothingItem("Shorts", "$20", "Stretchy & comfortable"),
    new ClothingItem("Jeans", "$100", "Skinny fit"),
    new ClothingItem("Hoodie", "$65.30", "Soft, 100% cotton"), 
  ];
  
  let clothingMenu = new ClothingMenu(); // Create a new clothing menu and add the default items to it
  defaultItems.forEach((item) => clothingMenu.addItem(item));
  
  clothingMenu.displayMenu(); // Display the initial clothing menu
  

  let newItem = new ClothingItem("Boots", "$120", " Knee high, Leather"); // add a new item to the clothing menu
  clothingMenu.addItem(newItem);

  
  clothingMenu.displayMenu(); // Display the updated clothing menu
  
  clothingMenu.deleteItem(2); // Delete an item from the clothing menu
  
  clothingMenu.displayMenu();  // Display the updated clothing menu
  