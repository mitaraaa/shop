import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/product/:id" element={<Product />} />
				<Route exact path="/cart" element={<Cart />} />
				<Route exact path="/search/:title" element={<Home />} />
				<Route exact path="/search/" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default App;
