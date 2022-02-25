## Shop [client]
This is a guide to help in understanding the structure of my project

---

### About
- **Goals:** make a fullstack minimal viable product
- **Objectives:** 
  1. Create React app 
  2. Add a REST API
  3. Combine React frontend with API
- **Purpose:** E-commerce website for clothing
- **Used technologies:**
  - Javascript & JSX
  - Node.js
  - React
  - Redux
  - Mongo.db
  - Express

---

### Structure
```client/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ robots.txt
├─ src/
│  ├─ components/
│  │  ├─ Footer.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Product.jsx
│  │  ├─ Products.jsx
│  ├─ pages/
│  │  ├─ Cart.jsx
│  │  ├─ Product.jsx
│  │  ├─ Home,jsx
│  ├─ redux/
│  │  ├─ store.js
│  │  ├─ cartRedux.js
│  ├─ App.jsx
│  ├─ index.css
│  ├─ index.js
│  ├─ requestMethods.js
│  ├─ responsive.js
├─ .gitignore
├─ package.json
├─ README.md
```

`public/` : folder with base html code (`favicon`, `html layout`, `robots file`)

`src/` : folder with source code
- `index.js` : React project entry point, renders React JSX in HTML **`div`** with **`root`** class
- `App.jsx` : Main React component, returns routed pages
- `requestMethods.js` : Exports **`axios`** requests
- `responsive.js` : **`styled`** library binding to insert adapted css into components
- `pages/` : Folder with all React pages
  - `Cart.jsx` : Renders cart page
  - `Product.jsx` : Renders single product page
  - `Home.jsx` : Renders homepage
- `components/`
  - `Navbar.jsx` : Navbar component
  - `Product.jsx` : Product component, used in **`Products.jsx`**
  - `Products.jsx` : Product list component, renders all products or products that were searched
  - `Footer.jsx` : Footer component
- `redux/` : Folder with **`Redux`** code
  - `cartRedux.js` : Declares `cart` slice and methods to manipulate cart
  - `store.js` : Creates persist storage and provides interaction with **`cartRedux.js`**
