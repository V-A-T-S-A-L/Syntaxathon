import './App.css'
import AgriculturalNeeds from './components/AgriculturalNeeds';
import Footer from './components/Footer'
import IncomeWeatherForecast from './components/IncomeWeatherForecast';
import LandingPage from './components/LandingPage'
import Login from './components/Login';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import CropPriceForecast from './components/CropPriceForecast';
import Finance from './components/Finance';

function App() {

	return (
		<>
			<BrowserRouter>
				<Navbar />
					<Routes>
						<Route path='/' element={<LandingPage />}/>
						<Route path='predict-income&weather' element={<IncomeWeatherForecast />}/>
						<Route path='agricultural-needs' element={<AgriculturalNeeds />}/>
						<Route path='login' element={<Login />}/>
						<Route path='signup' element={<Signup />}/>
						<Route path='crop-price-forecast' element={<CropPriceForecast />}/> 
						<Route path='financial-advisory' element={<Finance />}/>
					</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
