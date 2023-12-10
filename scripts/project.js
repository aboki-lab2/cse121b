/* async exchangerate Function using fetch()*/
async function fetchexchangeRate() {
    console.log('fetchexchangeRate');
    try {
        // The API endpoint that returns JSON data
        let url = "https://api.exchangerate.host/live?access_key=193e55dbc9d1caddc72ef79ddc17a948&format=1";
        // Use Fetch to get the data
        let response = await fetch(url);
        // Convert the response to JSON
        let data = await response.json();
        console.log('data', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// this will create a function called createInvoice with two objects
function createInvoice(items, date) {
    console.log('createInvoice called with', items, date);
    // this will start the object
    let invoice = {
      items: [], // An array of item objects
      totalItems: 0, // This will calculate the total number of items
      totalAmount: 0, // The total amount on  the invoice
      date: date, // The date of the invoice
    };
    console.log('invoice', invoice);
}
  
  // will interact with the DOM of an HTML document. 
  function displayInvoice(invoice) {
    let invoiceDate = document.getElementById("invoice-date");
    let invoiceTable = document.getElementById("invoice-table");
    let invoiceTotalItems = document.getElementById("invoice-total-items");
    let invoiceTotalAmount = document.getElementById("invoice-total-amount");
    // This will delete the previous content to allow for new input by the user
    invoiceDate.textContent = "";
    invoiceTable.innerHTML = "";
    invoiceTotalItems.textContent = "";
    invoiceTotalAmount.textContent = "";
    // This will verify the validity of the invoice
    if (invoice.items && invoice.items.length > 0) {
      // Format the date using the local string
      let date = new Date(invoice.date).toLocaleDateString();
      // Set the invoice date text
      invoiceDate.textContent = `Date: ${date}`;
      // Create a table header row using tr
      let headerRow = document.createElement("tr");
      // Create and append the table header cells
      let headers = ["Item", "Price", "Quantity", "Subtotal"];
      for (let header of headers) {
        let cell = document.createElement("th");
        cell.textContent = header;
        headerRow.appendChild(cell);
      }
      // Append the header row to the table
      invoiceTable.appendChild(headerRow);
      // Loop through the invoice items array
      for (let item of invoice.items) {
        // Create a table body row
        let bodyRow = document.createElement("tr");
        // Create and append the table body cells
        let values = [item.name, item.price, item.quantity, item.price * item.quantity];
        for (let value of values) {
          let cell = document.createElement("td");
          cell.textContent = value;
          bodyRow.appendChild(cell);
        }
        // Append the body row to the table
        invoiceTable.appendChild(bodyRow);
      }
      // Set the invoice total items and total amount text
      invoiceTotalItems.textContent = `Total Items: ${invoice.totalItems}`;
      invoiceTotalAmount.textContent = `Total Amount: ${invoice.totalAmount}`;
    } else {
      // Display a message if the invoice is empty
      invoiceDate.textContent = "No invoice data available";
    }
  }
  
  // A function to print the invoice
  function printInvoice() {
    // Get the invoice element from the DOM
    let invoice = document.getElementById("invoice");
    // Check if the invoice is valid
    if (invoice) {
      // Create a new window for printing
      let printWindow = window.open("", "Print Invoice", "width=1000,height=500");
      // Check if the print window is valid
      if (printWindow) {
        // Copy the invoice HTML content to the print window
        printWindow.document.write(invoice.outerHTML);
        // Print the invoice
        printWindow.print();
        // Close the print window
        printWindow.close();
      }
    }
  }
  
  // A function to get the user input from the HTML form
  function getUserInput() {
    // Get the elements from the DOM
    let itemName = document.getElementById("item-name");
    let itemPrice = document.getElementById("item-price");
    let itemQuantity = document.getElementById("item-quantity");
    let submitButton = document.getElementById("submit-button");
    // Check if the elements are valid
    if (itemName && itemPrice && itemQuantity && submitButton) {
     // Add an event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();
  // Select the print button
let printButton = document.querySelector('#print-button');

// Add a click event listener to the print button
printButton.addEventListener('click', function() {
  window.print();
});
    // Get the values from the form
    let itemName = document.querySelector('#item-name').value;
    let itemPrice = document.querySelector('#item-price').value;
    let itemQuantity = document.querySelector('#item-quantity').value;
  
    // Create an item object
    let item = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };
  
    // Validate the user input values
    if (item.name && item.price > 0 && item.quantity > 0) {
      // Add the item to the items array
      items.push(item);
      // Create a new invoice with the current date and items array
      let invoice = createInvoice(items, new Date());
      // Display the invoice on the HTML document
      displayInvoice(invoice);
      // Clear the user input fields
      document.querySelector('#item-name').value = "";
      document.querySelector('#item-price').value = "";
      document.querySelector('#item-quantity').value = "";
      // Clear the items array
      items = [];
    } else {
      // This message will display if input is not valid
      alert("Kindly add a valid name of the product, quantity and price");
    }
  });
    }
  }
  // Use a global variable to store the items array
let items = [];

// Select the form and the invoice div
let form = document.querySelector('form');
let invoiceDiv = document.querySelector('#invoice');

// Add an event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the values from the form
  let itemName = document.querySelector('#item-name').value;
  let itemPrice = document.querySelector('#item-price').value;
  let itemQuantity = document.querySelector('#item-quantity').value;

  // Create an item object
  let item = {
    name: itemName,
    price: parseFloat(itemPrice),
    quantity: parseInt(itemQuantity),
  };

  // Validate the user input values
  if (item.name && item.price > 0 && item.quantity > 0) {
    // Add the item to the items array
    items.push(item);
    // Create a new invoice with the current date and items array
    let invoice = createInvoice(items, new Date());
    // Display the invoice on the HTML document
    displayInvoice(invoice);
    // Clear the user input fields
    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
  } else {
    // Display an alert if the user input values are invalid
    alert("Kindly add a valid name of the product, quantity and price");
  }
});

function createInvoice(items, date) {
  // Initialize the invoice object
  let invoice = {
    items: items, // The items
    totalItems: items.length, // The total number of items
    totalAmount: items.reduce((total, item) => total + item.price * item.quantity, 0), // The total amount
    date: date, // The date
  };

  return invoice;
}

function displayInvoice(invoice) {
    // The user will add the name that will display on the invoice
    let userName = document.querySelector('#user-name').value;
  
    let invoiceString = 'Invoice:<br><br>';
  
    invoice.items.forEach((item, index) => {
      invoiceString += `Item ${index + 1}:<br>`;
      invoiceString += `Name: ${item.name}<br>`;
      invoiceString += `Price: $${item.price.toFixed(2)}<br>`;
      invoiceString += `Quantity: ${item.quantity}<br><br>`;
    });
  
    invoiceString += `Total Items: ${invoice.totalItems}<br>`;
    invoiceString += `Total Amount: $${invoice.totalAmount.toFixed(2)}<br>`;
    invoiceString += `Date: ${new Date(invoice.date).toLocaleString()}<br>`;
    invoiceString += `<br><br><br>`; // This additional code will create a gap to append the name of the user on the footer of the invoice
    invoiceString += `This invoice was prepared by ${userName}<br>`; // Add the user's name to the invoice
  // Select the print button
let printButton = document.querySelector('#print-button');

// Add a click event listener to the print button
printButton.addEventListener('click', function() {
    // Create a new window
    let printWindow = window.open('', '_blank');
    // Write the invoice into the new window
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(invoiceDiv.innerHTML);
    printWindow.document.write('</body></html>');
    // Close the document to finish loading the page
    printWindow.document.close();
    // Print the new window
    printWindow.print();
  });
    // This will display the invoiceString
    invoiceDiv.innerHTML = invoiceString;
  }
  
  
  // Call the init function when the window loads
  window.onload = init;
  // copyright year
document.querySelector('#year').textContent = new Date().getFullYear();

// toggle menu in small view
let toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('open');
}

document.querySelector('#toggleMenu').addEventListener('click', toggleMenu);

  