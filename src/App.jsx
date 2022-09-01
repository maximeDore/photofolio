import { Navbar, Hero, Gallery, Footer } from "./components";

const App = () => (
	<div className="bg-black w-full overflow-hidden">
		{/* Nav */}
		<Navbar />

		{/* Hero */}
		<Hero />

		{/* Content */}
		<Gallery />
		<Footer />
	</div>
);

export default App;
