
import "./App.css"
import {Route,Routes} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Navbar from "./components/Navbar"
import { User } from "./components/User"
import { Settings } from "./components/Settings"
import { Shop } from "./components/Shop"

const App = () => {

  return (
    <>
	
<header className="max-w-[360px] mx-auto md:max-w-[360px] md:mx-auto">
	<Routes>
		{/* Single routing */}
		<Route path='/' element=
		{<Homepage />}/>

		<Route path='user' element= 
		 {<User/>}
		/>
		<Route path='settings' element= 
		 {<Settings/>}
		/>

		<Route path='shop' element= 
		 {<Shop/>}
		/>
		{/* <Route path='checkout'  
		// element={<Checkout  basketData={basketData}/>}/>*/}
		{/* <Route path='*' element={<Error/>}/> */}

		{/* Nested Routing */}
		{/* <Route path='products' element={<Product/>}> */}
			{/* To display a nested route child */}
			{/* <Route index element={<FeaturedProduct/>}/> */}
			{/* <Route path='featured' element={<FeaturedProduct/>}/> */}
			{/* <Route path='new' element={<NewProduct/>}/> */}
		{/* </Route> */}
	</Routes>
	<Navbar/>
	</header>
</>
  )
}

export default App
