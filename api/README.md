## Shop [server]
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
```
api/
├─ node_modules/
├─ models/
│  ├─ Product.js
├─ routes/
│  ├─ product.js
├─ index.js
├─ package.json
├─ README.md
```

`index.js` : Handles **`mongoose`** and **`express`** connection, routes api calls
`models/Product.js` : Creates **`mongoose.Schema`** and exports **`mongoose.Model`**
`routes/product.js` : Makes CRUD operations with **`mongoose`**, binds operations to urls
