import './App.css'
import AgriculturalNeeds from './components/AgriculturalNeeds';
import Footer from './components/Footer'
import IncomeWeatherForecast from './components/IncomeWeatherForecast';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar />
					<Routes>
						<Route path='/' element={<LandingPage />}/>
						<Route path='predict-income&weather' element={<IncomeWeatherForecast />}/>
						<Route path='agricultural-needs' element={<AgriculturalNeeds />}/>
					</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
