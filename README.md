🛒 ShoppyGlobe - E-commerce Application

ShoppyGlobe is a simple yet fully functional e-commerce application built with **React, Redux, and React Router**.  
It allows users to browse products, view product details, and add/remove products from the cart.

---

## 🚀 Features

✅ **Product Listing** - Fetches products from an API and displays them.  
✅ **Product Details** - Shows detailed information about a selected product.  
✅ **Shopping Cart** - Add, remove, and manage items in the cart.  
✅ **Search Feature** - Filter products based on search input.  
✅ **Redux State Management** - Handles cart operations efficiently.  
✅ **React Router** - Implements routing for Home, Product Details, and Cart pages.  
✅ **Lazy Loading** - Optimizes performance using `React.lazy` and `Suspense`.  
✅ **Responsive Design** - Works well on different screen sizes.  
✅ **Error Handling** - Displays meaningful messages for failed API requests.  
✅ **Toggle Notification** - Displays a success message when an item is added to the cart.  

---

## 🛠️ **Tech Stack**
- **Frontend:** React, Redux, React Router  
- **State Management:** Redux Toolkit  
- **Styling:** CSS  
- **API:** [DummyJSON API](https://dummyjson.com/)  
- **Performance Optimization:** React.lazy, Suspense  

---

## 📂 **Project Structure**
shoppyglobe/ │── src/ │ │── components/ │ │ │── Header.jsx │ │ │── ProductList.jsx │ │ │── ProductItem.jsx │ │ │── ProductDetail.jsx │ │ │── Cart.jsx │ │ │── CartItem.jsx │ │── hooks/ │ │ │── useFetchProducts.js │ │── pages/ │ │ │── Home.jsx │ │ │── NotFound.jsx │ │── redux/ │ │ │── store.js │ │ │── cartSlice.js │ │── App.js │ │── main.jsx │── public/ │── package.json │── README.md

yaml
Copy
Edit

---

## 📌 **Installation & Setup**
Follow these steps to run the project locally:

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/jareena-shaik-158/shoppy_globe_project.git
cd shoppy_globe_project
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Start the Development Server
sh
Copy
Edit
npm run dev
The app should now be running at http://localhost:5173.

🔄 Redux Store Setup
The cartSlice.js file manages the shopping cart state.
Actions include adding, removing, and updating the cart.
🌐 API Used
This project fetches product data from DummyJSON API:

Get all products: https://dummyjson.com/products
Get product by ID: https://dummyjson.com/products/{id}
🎨 Styling
Custom CSS is used for better design.
The design is responsive & mobile-friendly.
📜 License
This project is MIT Licensed.

📧 Contact
For any questions, feel free to reach out:
GitHub: jareena-shaik-158
