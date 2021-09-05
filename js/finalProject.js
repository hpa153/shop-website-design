// 1. Create some constructors for:
// Store item object
function StoreItem(id, name, price, qtyOnHand, maxPerCustomer, category, shippingCost, reviews, description, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qtyOnHand = qtyOnHand;
    this.maxPerCustomer = maxPerCustomer;
    this.category = category;
    this.shippingCost = shippingCost;
    this.reviews = reviews;
    this.description = description;
    this.image = image;
}

// Cart item object
function CartItem(id, name, price, qty, shippingCost, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.shippingCost = shippingCost;
    this.image = image;
} 

// 2. Create some global variables:
// Array for the store item objects
var storeItems = [];

// Array for the cart item objects
var cartItems = [];

// Populate the store items array
storeItems.push(new StoreItem("mj01", "Grey Jeans", 54.99, 7, 3, "Men Fashion", 1.99, ["Good", "High quality"], "Grey jeans for men", "images/men/mj01.jpg"));
storeItems.push(new StoreItem("mj02", "Blue Jeans", 68.99, 2, 1, "Men Fashion", 1.99, ["Awesome", "Perfect style", "Love it"], "Stylish blue jeans for men", "images/men/mj02.jpg"));
storeItems.push(new StoreItem("mshi01", "Milk T-Shirt", 34.99, 3, 2, "Men Fashion", 1.99, ["Perfect", "Loved it at first sight"], "Stylish T-Shirt for men", "images/men/mshi01.jpg"));
storeItems.push(new StoreItem("msho01", "Sport Shoes", 42.99, 9, 2, "Men Fashion", 1.99, ["Lovely", "Couldn't expect more"], "White sport shoes for men", "images/men/msho01.jpg"));
storeItems.push(new StoreItem("msu01", "Casual Veston", 158.99, 1, 2, "Men Fashion", 2.99, ["Couldn't be better"], "Casual veston for men", "images/men/msu01.jpg"));
storeItems.push(new StoreItem("msu02", "White Blazer", 134.99, 5, 1, "Men Fashion", 3.99, ["Exactly what expected", "Good price and better quality"], "Blazer for men", "images/men/msu02.jpg"));
storeItems.push(new StoreItem("wdr01", "Black Dress", 86.99, 13, 3, "Women Fashion", 1.99, ["Love it", "Decent design"], "Black dress for parties and events", "images/women/wdr01.jpg"));
storeItems.push(new StoreItem("wdr02", "Flower Dress", 78.99, 4, 2, "Women Fashion", 1.99, ["Not too bad", "Top quality"], "Flower dress to shine where ever you go", "images/women/wdr02.jpeg"));
storeItems.push(new StoreItem("wj01", "Blue Jeans", 32.99, 10, 3, "Women Fashion", 1.99, ["Good", "High quality"], "Friendly design for best comfort", "images/women/wj01.jpg"));
storeItems.push(new StoreItem("wof01", "Casual Outfit", 137.99, 2, 1, "Women Fashion", 2.49, ["Perfect", "Loved it at first sight", "Couldn't expect more"], "Outfit suits every occassion", "images/women/wof01.jpg"));
storeItems.push(new StoreItem("wof02", "Event Outfit", 126.99, 1, 2, "Women Fashion", 2.99, ["Suits in every event", "Shining with this outfit"], "Shine in every event you join", "images/women/wof02.jpg"));
storeItems.push(new StoreItem("wsho01", "Sport Shoes", 79.99, 8, 2, "Women Fashion", 1.99, ["So comfortable", "Fits perfectly", "Nothing to complain"], "Comfortable on every step", "images/women/wsho01.jpg"));
storeItems.push(new StoreItem("kof01", "Casual outfit", 24.99, 13, 2, "Kids Fashion", 1.99, ["Looks great", "My child looks lovely in it"], "Outfit for kids to play, learn and just anywhere", "images/kids/kof01.jpg"));
storeItems.push(new StoreItem("kof02", "Camp outfit", 32.99, 1, 2, "Kids Fashion", 1.49, ["My little boy wants to wear this all the time", "My son can't get away from this outfit", "It's so lovely, need to get a few more for my boys"], "Outfit ideal for outside activities, especially camping", "images/kids/kof02.jpg"));
storeItems.push(new StoreItem("kshi01", "Violet T-shirt", 12.99, 23, 3, "Kids Fashion", 1.99, ["Good", "High quality", "Comfortable", "So sweet"], "Great for any activity", "images/kids/kshi01.jpg"));
storeItems.push(new StoreItem("kshi02", "Red shirt", 17.99, 5, 2, "Kids Fashion", 2.99, ["My boy looks like a business man, couldn't want more", "High quality"], "Stylish, yet comfortable", "images/kids/kshi02.jpg"));
storeItems.push(new StoreItem("kshi03", "White T-shirt", 11.99, 11, 2, "Kids Fashion", 1.99, ["Easy to wash after it gets dirty from playing", "Really good"], "Casual T-shirt your child could wear anywhere", "images/kids/kshi03.jpg"));
storeItems.push(new StoreItem("ksho01", "Fashion shoes", 14.99, 24, 3, "Kids Fashion", 1.99, ["So comfortable", "My daughter could run all day in them"], "Comfort meets style", "images/kids/ksho01.jpg"));


// Retrieve html elements
var categoryMen = document.querySelector(".men-fashion").querySelector(".category-products");
var categoryWomen = document.querySelector(".women-fashion").querySelector(".category-products");
var categoryKids = document.querySelector(".kids-fashion").querySelector(".category-products");
var dateToDisplay = document.getElementById("today");

// 4. Display Store Items
/*
    Function to create an item for displaying
*/

function categorizeProducts(category, index) {
    // Get currency
    var currentCurrency = document.getElementById("currency").value;

    // Create elements 
    var item = document.createElement("article");
    var itemInfo = document.createElement("div");
    var itemImage = document.createElement("img");
    var itemName = document.createElement("p");
    var itemPrice = document.createElement("span");

    itemInfo.innerHTML = "<div class='cart-action'><a onclick='addToCart(`" + storeItems[index].id + "`);'><i class='fas fa-plus'></i></a><a onclick='removeFromCart(`" + storeItems[index].id + "`);'><i class='fas fa-minus'></i></a><a onclick='showDetails(`" + storeItems[index].id + "`);'><i class='fas fa-info-circle cart-icon'></i></a><a onclick='writeReview(`" + storeItems[index].id + "`);'><i class='fas fa-edit'></i></a></div>";

    // Append elements in nested order and assign css classes
    itemInfo.appendChild(itemName);
    itemInfo.appendChild(itemPrice);
    itemImage.src = storeItems[index].image;
    itemImage.alt = storeItems[index].name;
    item.className = "item";
    itemInfo.className = "item-info";
    itemName.innerHTML = storeItems[index].name;

    // Assign currency to display and calculate price based on currency
    // Approximate values: 1 CAD = 0.8 USD = 0.6 GBP
    if (currentCurrency === "cad") {
        itemPrice.innerHTML = "CA&#36; " + storeItems[index].price.toFixed(2);
    } else if (currentCurrency === "usd") {
        itemPrice.innerHTML = "US&#36; " + (storeItems[index].price * 0.8).toFixed(2);
    } else if (currentCurrency === "gbp") {
        itemPrice.innerHTML = "&#163; " + (storeItems[index].price * 0.6).toFixed(2);
    }

    // Append main elements to the final item and final item to the container
    item.appendChild(itemImage);
    item.appendChild(itemInfo);
    category.appendChild(item);
}

/*
    Function to display items and date
*/

function displayProducts() {
    // Reset each html container before displaying elements
    categoryMen.innerHTML = "";
    categoryWomen.innerHTML = "";
    categoryKids.innerHTML = "";
    
    // Run a loop to display items in the correct container, based on categories
    for (var i = 0; i < storeItems.length; i++) {

        if (storeItems[i].category === "Men Fashion") {
            categorizeProducts(categoryMen, i);
        } else if (storeItems[i].category === "Women Fashion") {
            categorizeProducts(categoryWomen, i);
        } else if (storeItems[i].category === "Kids Fashion") {
            categorizeProducts(categoryKids, i);
        }
    }
}

// Call function to display items
displayProducts();

/*
    Function to display date
*/

function displayDate() {
    // Variables to store parts of current date
    var today = new Date();
    var currentDay = "";
    var currentMonth = "";

    if (today.getDay() === 0) {
        currentDay = "Sunday";
    } else if (today.getDay() === 1) {
        currentDay = "Monday";
    } else if (today.getDay() === 2) {
        currentDay = "Tuesday";
    } else if (today.getDay() === 3) {
        currentDay = "Wednesday";
    } else if (today.getDay() === 4) {
        currentDay = "Thursday";
    } else if (today.getDay() === 5) {
        currentDay = "Friday";
    } else if (today.getDay() === 6) {
        currentDay = "Saturday";
    }

    if (today.getMonth() === 0) {
        currentMonth = "January";
    } else if (today.getMonth() === 1) {
        currentMonth = "February";
    } else if (today.getMonth() === 2) {
        currentMonth = "March";
    } else if (today.getMonth() === 3) {
        currentMonth = "April";
    } else if (today.getMonth() === 4) {
        currentMonth = "May";
    } else if (today.getMonth() === 5) {
        currentMonth = "June";
    } else if (today.getMonth() === 6) {
        currentMonth = "July";
    } else if (today.getMonth() === 7) {
        currentMonth = "August";
    } else if (today.getMonth() === 8) {
        currentMonth = "September";
    } else if (today.getMonth() === 9) {
        currentMonth = "October";
    } else if (today.getMonth() === 10) {
        currentMonth = "November";
    } else if (today.getMonth() === 11) {
        currentMonth = "December";
    }

    // Display date in top right corner of introduction section
    dateToDisplay.innerHTML = "<p>" + currentDay + ", " + currentMonth + " "  + today.getDate() + ", " + today.getFullYear() + "</p>";
}

// Call function to display date
displayDate();

/*
    Function to display items per category, based on user selection
*/

function viewCategory(id) {
    // Retrieve elements
    var categoryContainer = document.querySelector(".view-category");
    var categoryToDisplay = document.getElementById("category-to-display");
    var categoryName = document.querySelector(".category-name");
    
    // Reset table rows
    categoryToDisplay.innerHTML = "";

    // Get currency
    var currentCurrency = document.getElementById("currency").value;

    // Display div
    categoryContainer.classList.add("show");

    // Set header content and category based on input id
    var toDisplayCategory = "";
    if (id === "men") {
        categoryName.innerHTML = "MEN FASHION";
        toDisplayCategory = "Men Fashion";
    } else if (id === "women") {
        categoryName.innerHTML = "WOMEN FASHION";
        toDisplayCategory = "Women Fashion";
    } else if (id === "kids") {
        categoryName.innerHTML = "KIDS FASHION";
        toDisplayCategory = "Kids Fashion";
    }

    for (var i = 0; i < storeItems.length; i++) {
        if (storeItems[i].category === toDisplayCategory) {
            // Insert new row and cells within that row
            var newItem = categoryToDisplay.insertRow(-1);
            var rowID = newItem.insertCell(0);
            var rowName = newItem.insertCell(1);
            var rowPrice = newItem.insertCell(2);
            var rowQty = newItem.insertCell(3);
            var rowMax = newItem.insertCell(4);
            var rowDetails = newItem.insertCell(5);
            var rowReviews = newItem.insertCell(6);
            var rowImage = newItem.insertCell(7);
            var rowCart = newItem.insertCell(8);

            // Populate row content
            rowID.innerHTML = storeItems[i].id;
            rowName.innerHTML = storeItems[i].name;

            // Based on current selected currency to display price
            if (currentCurrency === "cad") {
                rowPrice.innerHTML = "CA&#36; " + storeItems[i].price.toFixed(2);
            } else if (currentCurrency === "usd") {
                rowPrice.innerHTML = "US&#36; " + (storeItems[i].price * 0.8).toFixed(2);
            } else if (currentCurrency === "gbp") {
                rowPrice.innerHTML = "&#163; " + (storeItems[i].price * 0.6).toFixed(2);
            }

            rowQty.innerHTML = storeItems[i].qtyOnHand;
            rowMax.innerHTML = storeItems[i].maxPerCustomer;
            rowDetails.innerHTML = storeItems[i].description;

            // var reviews = storeItems[i].reviews;

            rowReviews.style.whiteSpace = "pre";
            for (let review of storeItems[i].reviews) {
                rowReviews.appendChild(document.createTextNode(review));
                rowReviews.innerHTML += "\r\n";
            }

            // Create img element to insert in image cell
            var itemImage = document.createElement("img");
            itemImage.src = storeItems[i].image;
            itemImage.alt = storeItems[i].name;

            rowImage.appendChild(itemImage);
            rowCart.innerHTML = "<a onclick='addToCart(`" + storeItems[i].id + "`);'><i class='fas fa-plus'></i></a><a onclick='removeFromCart(`" + storeItems[i].id + "`);'><i class='fas fa-minus'></i></a><a onclick='writeReview(`" + storeItems[i].id + "`);'><i class='fas fa-edit'></i></a>";
        }
    }
}

var cartHolder = document.getElementById("cart-items");

// 5. Display Cart Items
/*
    Function to populate cart items
*/

function populateCart(index) {
    // Get currency
    var currentCurrency = document.getElementById("currency").value;

    // Create elements 
    var cartItem = document.createElement("article");
    var cartInfo = document.createElement("section");
    var cartName = document.createElement("h5");
    var cartId = document.createElement("p");
    var cartPrice = document.createElement("p");
    var cartQuantity = document.createElement("p");
    var cartShipping = document.createElement("p");
    var cartImageHolder = document.createElement("section");
    var cartImage = document.createElement("img");

    // Append elements in nested order and assign css classes
    cartItem.className = "cart-item";
    cartInfo.className = "cart-info";
    cartImageHolder.className = "cart-img";

    cartInfo.appendChild(cartName);
    cartInfo.appendChild(cartId);
    cartInfo.appendChild(cartPrice);
    cartInfo.appendChild(cartShipping);
    cartInfo.appendChild(cartQuantity);
    cartImageHolder.appendChild(cartImage);
    

    // Assign values to each created element
    cartName.innerHTML = cartItems[index].name;
    cartId.innerHTML = "Product ID: <strong>" + cartItems[index].id + "</strong>";
    cartQuantity.innerHTML = "Quantity: <strong>" + cartItems[index].qty + "</strong>";

    // Assign currency to display and calculate price based on currency
    // Approximate values: 1 CAD = 0.8 USD = 0.6 GBP
    if (currentCurrency === "cad") {
        cartPrice.innerHTML = "Price per item:<strong> CA&#36; " + cartItems[index].price.toFixed(2) + "</strong>";
        cartShipping.innerHTML = "Shipping cost per item:<strong> CA&#36; " + cartItems[index].shippingCost.toFixed(2) + "</strong>";
    } else if (currentCurrency === "usd") {
        cartPrice.innerHTML = "Price per item: US&#36;<strong> " + (cartItems[index].price * 0.8).toFixed(2) + "</strong>";
        cartShipping.innerHTML = "Shipping cost per item:<strong> US&#36; " + (cartItems[index].shippingCost * 0.8).toFixed(2) + "</strong>";
    } else if (currentCurrency === "gbp") {
        cartPrice.innerHTML = "Price per item:<strong> &#163; " + (cartItems[index].price * 0.6).toFixed(2) + "</strong>";
        cartShipping.innerHTML = "Shipping cost per item:<strong> &#163; " + (cartItems[index].shippingCost * 0.6).toFixed(2) + "</strong>";
    }

    cartImage.src = cartItems[index].image;
    cartImage.alt = cartItems[index].name;
    
    // Append main elements to the final item and final item to the container
    cartItem.appendChild(cartInfo);
    cartItem.appendChild(cartImageHolder);
    cartHolder.appendChild(cartItem);
}

/*
    Function to display cart items
*/

var totalPrice = 0;
var totalShipping = 0;
var subTotalCost = 0;
var taxCost = 0;
var totalAmount = 0;

// Create message element 
var message = document.createElement("p");
message.style.marginTop = "10px";

// Retrieve cart div and cart items container
var cart = document.querySelector(".cart");
var itemsInCart = document.getElementById("cart-items");
    
// Retrieve backdrop behind cart div
var backdrop = document.querySelector(".backdrop");

function displayCart(mess = "") {
    // Display cart
    cart.classList.add("show");

    // Get currency
    var currentCurrency = document.getElementById("currency").value;

    // Retrieve price container
    var priceToDisplay = document.getElementById("price");

    // Reset price for display
    totalPrice = 0.00;
    totalShipping = 0.00;
    taxCost = 0.00;
    totalAmount = 0.00;

    // Reset message and cart before displaying items
    message.innerHTML = "";
    itemsInCart.innerHTML = "";
    priceToDisplay.innerHTML = "";

    // Create elements for price
    var itemPrice = document.createElement("p");
    var shippingCost = document.createElement("p");
    var subTotal = document.createElement("p");
    var tax = document.createElement("p");
    var totalCost = document.createElement("p");

    var currencySign = "";
    if (currentCurrency === "cad") {
        currencySign = "CA&#36; ";
    } else if (currentCurrency === "usd") {
        currencySign = "US&#36; ";
    } else if (currentCurrency === "gbp") {
        currencySign = "&#163; ";
    }

    // Run a loop to display cart items
    // If cartItems array is empty, display message
    if (cartItems.length === 0) {
        if (mess == "") {
            message.innerHTML = "You don't have any items in your cart. Surf below for some shopping!";
        } else {
            message.innerHTML = mess;
        }
        
        // Append message to cart
        document.getElementById("cart-message").appendChild(message);

        // Hide inappropriate elements for this case
        document.getElementById("buy").style.display = "none";
        document.getElementById("price").style.display = "none";
    } else { // Else display all items
        // Empty cart before displaying items
        itemsInCart.innerHTML = "";

        // Re-display buy button and price
        document.getElementById("buy").style.display = "";
        document.getElementById("price").style.display = "";

        if (mess != "") {
            message.innerHTML = mess;
            document.getElementById("cart-message").appendChild(message);
        }

        // 6. Calculate Cart Totals
        // Run loop to calculate sub total cost and shipping fee
        for (var i = 0; i < cartItems.length; i++) {
            populateCart(i);
            totalPrice += cartItems[i].price * cartItems[i].qty;
            totalShipping += cartItems[i].shippingCost * cartItems[i].qty;
        }

        subTotalCost = totalPrice + totalShipping;
        taxCost = subTotalCost * 13 / 100;
        totalAmount = subTotalCost + taxCost;

        // Assign values to created elements
        itemPrice.innerHTML = "Total Price: <strong>" + currencySign + totalPrice.toFixed(2) + "</strong>";
        shippingCost.innerHTML = "Total Shipping cost: <strong>" + currencySign + totalShipping.toFixed(2) + "</strong>";
        subTotal.innerHTML = "Sub-Total cost: <strong>" + currencySign + subTotalCost.toFixed(2) + "</strong>";
        tax.innerHTML = "Tax (13% of Sub-Total): <strong>" + currencySign + taxCost.toFixed(2) + "</strong>";
        totalCost.innerHTML = "Total Amount: <strong>" + currencySign + totalAmount.toFixed(2) + "</strong>";

        // Append elements to container
        priceToDisplay.appendChild(itemPrice);
        priceToDisplay.appendChild(shippingCost);
        priceToDisplay.appendChild(subTotal);
        priceToDisplay.appendChild(tax);
        priceToDisplay.appendChild(totalCost);
    }
    
    // Show backdrop
    backdrop.classList.add("appear");

    // Fix position for website, not allowing user to scroll website while viewing the cart
    document.body.style.position = 'fixed';
}

/*
    Function to close cart
*/

function closeCart() {
    cart.classList.remove("show");
    backdrop.classList.remove("appear");
    document.body.style.position = '';
}

// 7 Currency Selection
/*
    Function to switch between different flags for currency based on user selection
*/

function changeCurrency() {
    // Retrieve html elements
    var currentCurrency = document.getElementById("currency").value;
    var flag = document.getElementById("country");

    // Switch between flags flags based on user selection
    if (currentCurrency === "cad") {
        flag.src = "images/flags/can.png";
        flag.alt = "Currency Canadian dollars";
        displayProducts();
    } else if (currentCurrency === "usd") {
        flag.src = "images/flags/us.png";
        flag.alt = "Currency US dollars";
        displayProducts();
    } else if (currentCurrency === "gbp") {
        flag.src = "images/flags/uk.png";
        flag.alt = "Currency British pounds";
        displayProducts();
    }

    // Close category filtered container, so that it reloads selected currency once opened
    var categoryContainer = document.querySelector(".view-category");
    if (categoryContainer.classList.contains("show")) {
        categoryContainer.classList.remove("show");
    }
}

// Variable to hold displayed message on certain circumstances
var messageToDisplay = "";

// 8. Add to Cart
/*
    Function for adding item to cart
*/

function addToCart(id) {
    // Loop through store items array to find item with matching id
    for (var i = 0; i < storeItems.length; i++) {
        if (id === storeItems[i].id) {
            var name = storeItems[i].name;
            var id = storeItems[i].id;
            var price = storeItems[i].price;
            var shipping = storeItems[i].shippingCost;
            var image = storeItems[i].image;
            var maxQty = storeItems[i].maxPerCustomer
            var addQuantity = parseInt(window.prompt("In stock: " + storeItems[i].qtyOnHand + "\r\nMaximum per customer: " +
            storeItems[i].maxPerCustomer + "\r\nHow many items would you like?"));
            
            // 10. Validation
            // If item quantity is bigger than max per customer, less than 1 or an invalid input was provided
            // Cart will show up with message to inform the user for appropriate amount
            var sameID = false;
            if (addQuantity > storeItems[i].qtyOnHand || addQuantity > maxQty || addQuantity < 1) {
                messageToDisplay = "Please enter a valid amount of items!";
                displayCart(messageToDisplay);
            } else if (addQuantity >= 1 && addQuantity <= storeItems[i].maxPerCustomer) { // If input is appropriate, run a further loop to check if the same item has been bought
                for (var j = 0; j < cartItems.length; j++) {
                    if (id === cartItems[j].id) { // If yes, check following conditions
                        if (cartItems[j].qty + addQuantity > maxQty) { // If exceeding the max per customer amount, show current cart with message that item has not been added
                            messageToDisplay = "Sorry, you are permitted to buy more than <strong>" + maxQty + "</strong> items!<br/>Items were not added";
                            sameID = true;
                        } else if (cartItems[j].qty + addQuantity <= maxQty) { // If not exceeding the max per customer amount, add quantity and show cart
                            messageToDisplay = "Item was successfully added to your cart";
                            cartItems[j].qty += addQuantity;
                            storeItems[i].qtyOnHand -= addQuantity;
                            sameID = true;
                        } 
                    } 
                }

                // If item with the ID was not added yet, add it to cart items array
                if (sameID === false) {
                        messageToDisplay = "Item was successfully added to your cart"; // If not added before, add to cart items
                        cartItems.push(new CartItem(id, name, price, addQuantity, shipping, image));
                        storeItems[i].qtyOnHand -= addQuantity;
                }
                
                // If view category div is displayed, close it so that it will be refreshed once opened again
                if (document.querySelector(".view-category").classList.contains("show")) {
                    document.querySelector(".view-category").classList.remove("show");
                }

                // Display cart with message
                displayCart(messageToDisplay);
            }   
        }
    }
}

// 9. Remove from Cart
/*
    Function to remove items from cart
*/

function removeFromCart(id) {
    for (var i = 0; i < cartItems.length; i++) {
        // Find item in store item array, based on id
        if (id === cartItems[i].id) {
            // Prompt user to input amount of items to remove
            var removeQuantity = parseInt(window.prompt("How many items do you wish to remove?", "1"));

            // 10. Validation
            // If the input is inappropriate (to big, number less than 1, not a number)
            if (isNaN(removeQuantity) || removeQuantity <= 0 || removeQuantity > cartItems[i].qty) {
                // Show cart with message asking for a valid amount
                messageToDisplay = "Please enter a valid amount of items!";
                displayCart(messageToDisplay);
            } else if (removeQuantity <= cartItems[i].qty && removeQuantity > 0) { // If amount is appropriate
                for (var j = 0; j < storeItems.length; j++) {
                    if (storeItems[j].id === id) {
                        // Add amount to quantity on hand in store items array
                            storeItems[j].qtyOnHand += removeQuantity;                        
                    }
                }
                
                // Find item in cart items array
                const cartLength = cartItems.length;
                for (var k = 0; k < cartLength; k++) {
                    if (id === cartItems[k].id) {
                        // If the removed quantity results in 0 items left, remove item from cart items array
                        if (cartItems[k].qty - removeQuantity === 0) {
                            cartItems.splice(k, 1);
                        } else { // Else, deduct the removed quantity
                            cartItems[k].qty -= removeQuantity;
                        }
                    }
                }

                // If view category div is displayed, close it so that it will be refreshed once opened again
                if (document.querySelector(".view-category").classList.contains("show")) {
                    document.querySelector(".view-category").classList.remove("show");
                }
                
                // Assign messgae value and display message
                messageToDisplay = "Item was successfully removed from your cart";
                displayCart(messageToDisplay);
            }
        }
    }
    
}

// 11. Display Item Details
/*
    Function to display details and reviews
*/

function showDetails(id) {
    // Find item based on id
    for (var i = 0; i < storeItems.length; i++) {
        // Display information if item is found
        if (storeItems[i].id === id) {
            // Get currency sign
            var currencySign = function() {
                // Retrieve element value
                var currentCurrency = document.getElementById("currency").value;
                var currencySign = "";
                if (currentCurrency === "cad") {
                    currencySign = "CA$ ";
                } else if (currentCurrency === "usd") {
                    currencySign = "US$ ";
                } else if (currentCurrency === "gbp") {
                    currencySign = "£ ";
                }

                // Return currency sign
                return currencySign;
            };
            
            // View all details in an alert
            window.alert("Item Details:\r\nName: " + storeItems[i].name + 
            "\r\nID: " + storeItems[i].id + 
            "\r\nCategory: " + storeItems[i].category + 
            "\r\nDescription: " + storeItems[i].description +
            "\r\nPrice: " + currencySign() + storeItems[i].price + 
            "\r\nIn stock: " + storeItems[i].qtyOnHand + 
            "\r\nMaximum per customer: " + storeItems[i].maxPerCustomer + 
            "\r\nShipping Cost: " + currencySign() + storeItems[i].shippingCost + 
            "\r\nReviews:\r\n- " + storeItems[i].reviews.join("\r\n- "));
        }
    }
}

// 12. Review Item
/*
    Function to review product
*/

function writeReview(id) {
    // Prompt user to write a review
    var review = window.prompt("Leave us a review about your purchased product:", "Excellent");

    // Find the product with matching id
    for (var i = 0; i < storeItems.length; i++) {
        if (id === storeItems[i].id) {
            // If the user has written a review, add it to the reviews array of the product
            if (review != null) {
                storeItems[i].reviews.push(review);
            }
        }
    }
}

/*
    Function to populate search item
*/

function populateSearchItem(index) {
    var currentCurrency = document.getElementById("currency").value;

    // Create elements
    var searchResult = document.querySelector(".search-result");
    var resultItem = document.createElement("article");
    var resultInfo = document.createElement("section");
    var resultName = document.createElement("h5");
    var resultId = document.createElement("p");
    var resultCategory = document.createElement("p");
    var resultPrice = document.createElement("p");
    var cartIcons = document.createElement("div");
    var resultImageHolder = document.createElement("section");
    var resultImage = document.createElement("img");

    // Assign values to each created element
    resultName.innerHTML = storeItems[index].name;
    resultId.innerHTML = "Product ID: <strong>" + storeItems[index].id + "</strong>";
    resultCategory.innerHTML = "Category: <strong>" + storeItems[index].category + "</strong>";

    // Assign currency to display
    if (currentCurrency === "cad") {
        resultPrice.innerHTML = "Price:<strong> CA&#36; " + storeItems[index].price.toFixed(2) + "</strong>";
    } else if (currentCurrency === "usd") {
        resultPrice.innerHTML = "Price per item: US&#36;<strong> " + (storeItems[index].price * 0.8).toFixed(2) + "</strong>";
    } else if (currentCurrency === "gbp") {
        resultPrice.innerHTML = "Price per item:<strong> &#163; " + (storeItems[index].price * 0.6).toFixed(2) + "</strong>";
    }

    cartIcons.innerHTML = "<a onclick='addToCart(`" + storeItems[index].id + "`);'><i class='fas fa-plus'></i></a><a onclick='removeFromCart(`" + storeItems[index].id + "`);'><i class='fas fa-minus'></i></a><a onclick='writeReview(`" + storeItems[index].id + "`);'><i class='fas fa-edit'></i></a>";
    resultImage.src = storeItems[index].image;
    resultImage.alt = storeItems[index].name;

    // Append elements in nested order and assign css classes
    resultItem.className = "result-item";
    resultInfo.className = "cart-info";
    resultImageHolder.className = "cart-img";
    

    resultInfo.appendChild(resultName);
    resultInfo.appendChild(resultId);
    resultInfo.appendChild(resultCategory);
    resultInfo.appendChild(resultPrice);
    resultInfo.appendChild(cartIcons);
    resultImageHolder.appendChild(resultImage);

    resultItem.appendChild(resultInfo);
    resultItem.appendChild(resultImageHolder);
    searchResult.appendChild(resultItem);
}

/*
    Function to search per id or item name
*/

function searchItem() {
    // Retrieve element value and elements
    var searchTypes = document.getElementsByName("search-type");
    var keyword = document.getElementById("keyword").value;
    var searchType = "";

    for (var i = 0; i < searchTypes.length; i++) {
        if (searchTypes[i].checked) {
            searchType = searchTypes[i].value;
        }
    }

    var searchResult = document.querySelector(".search-result");

    // Create message and boolean to display message if item was not found
    var resultMessage = document.createElement("p");
    resultMessage.style.padding = "20px";
    var found = false;

    // Reset search result
    searchResult.innerHTML = "";
    
    // If item was searched by id and found
    if (searchType === "item-id") {
        for (var j = 0; j < storeItems.length; j++) {
            if (keyword === storeItems[j].id) {
                // Call populate search item function to display
                populateSearchItem(j);
                
                // Change boolean value to true in order to not display failed message
                found = true;
            }
        }
    } else if (searchType === "item-name") {
        for (var j = 0; j < storeItems.length; j++) {
            var productName = storeItems[j].name;
            if (keyword.toLowerCase() == productName.toLowerCase()) {
                // Call populate search item function to display
                populateSearchItem(j);
                
                // Change boolean value to true in order to not display failed message
                found = true;
            }
        }
    }

    // If item was not found, base on search type to display message
    if (searchType === "item-id" && found === false) {
        resultMessage.innerHTML = "Sorry! No item with product id <strong>" + keyword + "</strong> found!";
        searchResult.appendChild(resultMessage);
    } else if (searchType === "item-name" && found === false) {
        resultMessage.innerHTML = "Sorry! No item with product name <strong>" + keyword + "</strong> found!";
        searchResult.appendChild(resultMessage);
    }
}

/*
    Simple function that simulates a purchase, in this case, just clearing the array and alert a thanks message to the user
*/

function buy() {
    // Close cart
    closeCart();

    // Alert thanks message
    window.alert("Thank you for your purchase!");
}