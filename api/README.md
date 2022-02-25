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

---

### Literature sources
- [React E-commerce App tutorial (Youtube)](https://youtu.be/y66RgYMAgSo)
- [MERN Stack guide (Github)](https://github.com/safak/youtube/blob/mern-ecommerce-app/)
- [Redux Essentials guide](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- [Styled components documentation](https://styled-components.com/docs)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Mongo DB MERN Stack tutotial](https://www.mongodb.com/languages/mern-stack-tutorial)
- [Clothes source (VK)](https://vk.com/hikikomorikai)

---

### Criteria
- [x] Aims, objectives, detailed information about project
- [x] References to literature source(s)
- [x] High-quality images
- [x] HTML, CSS, JavaScript coverage
- [x] Bootstrap usage < 40%
- [x] README.md file
- [x] Responsiveness for 5 screen types