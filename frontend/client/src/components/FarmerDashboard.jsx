import { useState } from "react"
import {
  Sun,
  Cloud,
  Wind,
  Droplets,
  BarChart2,
  TreesIcon as Plant,
  Calendar,
  Map,
  DollarSign,
  ShoppingCart,
  Book,
  Bell,
  TrendingUp,
  TrendingDown,
  Leaf,
  Wheat,
  CropIcon as Corn,
  Bug,
  Menu,
} from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Sidebar from "./components/Sidebar"

const revenueData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
]

const cropYieldData = [
  { name: "Wheat", yield: 4.5 },
  { name: "Corn", yield: 5.2 },
  { name: "Soybeans", yield: 3.8 },
  { name: "Rice", yield: 4.1 },
]

const FarmerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow overflow-hidden bg-transparent transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"}`}
      >
        <div className="h-full overflow-y-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
            <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
              <header className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">Farmer Dashboard</h1>
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-md bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
                >
                  <Menu size={24} />
                </button>
              </header>

              {/* Overview / Summary Panel */}
              <section id="overview">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Overview</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  <Card>
                    <CardHeader title="Weather" icon={<Sun className="h-4 w-4 text-yellow-500" />} />
                    <CardContent>
                      <div className="text-2xl font-bold">25°C</div>
                      <p className="text-xs text-gray-500">Sunny with a chance of rain</p>
                      <div className="mt-4 flex space-x-2 text-sm">
                        <Cloud className="h-4 w-4 text-blue-500" />
                        <span>30%</span>
                        <Wind className="h-4 w-4 text-blue-500" />
                        <span>10 km/h</span>
                        <Droplets className="h-4 w-4 text-blue-500" />
                        <span>60%</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader title="Farm Revenue" icon={<BarChart2 className="h-4 w-4 text-green-500" />} />
                    <CardContent>
                      <div className="text-2xl font-bold">$10,000</div>
                      <p className="text-xs text-gray-500">+20.1% from last month</p>
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Expenses</span>
                          <span className="font-semibold">$5,000</span>
                        </div>
                        <ProgressBar value={50} />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader title="Crop Health" icon={<Plant className="h-4 w-4 text-green-500" />} />
                    <CardContent>
                      <div className="text-2xl font-bold">Good</div>
                      <p className="text-xs text-gray-500">2 minor issues detected</p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <Leaf className="h-4 w-4 mr-1 text-green-500" />
                          <span className="text-sm">Healthy</span>
                        </div>
                        <div className="flex items-center">
                          <Droplets className="h-4 w-4 mr-1 text-blue-500" />
                          <span className="text-sm">Well-watered</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader title="Upcoming Tasks" icon={<Calendar className="h-4 w-4 text-indigo-500" />} />
                    <CardContent>
                      <ul className="mt-2 space-y-1">
                        <li className="text-sm flex items-center">
                          <Droplets className="h-4 w-4 mr-2 text-blue-500" />
                          Irrigation: Tomorrow
                        </li>
                        <li className="text-sm flex items-center">
                          <Leaf className="h-4 w-4 mr-2 text-green-500" />
                          Fertilizer: In 3 days
                        </li>
                      </ul>
                      <button className="w-full mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm font-medium hover:bg-green-200 transition-colors">
                        View All Tasks
                      </button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Crop & Land Management */}
              <section id="crops">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Crop & Land Management</h2>
                <Card>
                  <CardHeader title="Crop & Land Overview" icon={<Map className="h-5 w-5 text-emerald-600" />} />
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Current Crops</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm md:text-base">
                            <Wheat className="mr-2 h-4 w-4 text-amber-500" />
                            Wheat: Mid-stage
                            <Badge>50 acres</Badge>
                          </li>
                          <li className="flex items-center text-sm md:text-base">
                            <Corn className="mr-2 h-4 w-4 text-yellow-500" />
                            Corn: Early-stage
                            <Badge>30 acres</Badge>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-sm md:text-base">Land Usage</h3>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm font-medium">
                              <span>Wheat</span>
                              <span>62.5%</span>
                            </div>
                            <ProgressBar value={62.5} />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm font-medium">
                              <span>Corn</span>
                              <span>37.5%</span>
                            </div>
                            <ProgressBar value={37.5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Analytics */}
              <section id="analytics">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <Card>
                    <CardHeader title="Revenue vs Expenses" icon={<BarChart2 className="h-5 w-5 text-emerald-600" />} />
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line type="monotone" dataKey="revenue" stroke="#059669" strokeWidth={2} />
                          <Line type="monotone" dataKey="expenses" stroke="#dc2626" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader title="Crop Yield Comparison" icon={<Plant className="h-5 w-5 text-emerald-600" />} />
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={cropYieldData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="yield" fill="#059669" />
                        </BarChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Financial Management & Loan Assistance */}
              <section id="finance">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Financial Management</h2>
                <Card>
                  <CardHeader title="Financial Overview" icon={<DollarSign className="h-5 w-5 text-emerald-600" />} />
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Credit Score:</span>
                        <Badge>750</Badge>
                      </div>
                      <ProgressBar value={75} />
                      <p className="text-xs text-gray-500">Excellent (700-850)</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium mb-1">Loan Eligibility:</p>
                      <p className="text-lg font-bold text-green-600">Up to $50,000</p>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      View Financial Reports
                    </button>
                  </CardContent>
                </Card>
              </section>

              {/* Marketplace & Selling Options */}
              <section id="marketplace">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Marketplace</h2>
                <Card>
                  <CardHeader title="Market Prices" icon={<ShoppingCart className="h-5 w-5 text-emerald-600" />} />
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Wheat className="mr-2 h-5 w-5 text-amber-500" />
                          <span className="font-medium">Wheat</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold mr-2">$220/ton</span>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Corn className="mr-2 h-5 w-5 text-yellow-500" />
                          <span className="font-medium">Corn</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-bold mr-2">$180/ton</span>
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Access Marketplace
                    </button>
                  </CardContent>
                </Card>
              </section>

              {/* Community & Knowledge Hub */}
              <section id="community">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Community & Knowledge Hub</h2>
                <Card>
                  <CardHeader title="Latest Updates" icon={<Book className="h-5 w-5 text-emerald-600" />} />
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Badge color="secondary">New</Badge>
                        <span className="ml-2">Tutorial: Efficient Irrigation Techniques</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Badge color="secondary">Hot</Badge>
                        <span className="ml-2">Forum: 10 new posts in Crop Rotation discussion</span>
                      </li>
                    </ul>
                    <button className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
                      Explore Hub
                    </button>
                  </CardContent>
                </Card>
              </section>

              {/* Notifications & Alerts */}
              <section id="alerts">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-emerald-700">Notifications & Alerts</h2>
                <Card>
                  <CardHeader title="Recent Alerts" icon={<Bell className="h-5 w-5 text-emerald-600" />} />
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-amber-600">
                        <Cloud className="mr-2 h-4 w-4" />
                        Possible heavy rain in 2 days
                      </li>
                      <li className="flex items-center text-sm text-rose-600">
                        <Bug className="mr-2 h-4 w-4" />
                        Potential pest issue detected in corn field
                      </li>
                      <li className="flex items-center text-sm text-sky-600">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Wheat prices expected to rise next week
                      </li>
                    </ul>
                    <button className="mt-4 w-full px-4 py-2 bg-green-100 text-green-800 rounded-md text-sm font-medium hover:bg-green-200 transition-colors">
                      View All Alerts
                    </button>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = ({ children }) => (
  <div className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
    {children}
  </div>
)

const CardHeader = ({ title, icon }) => (
  <div className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4">
    <h3 className="text-sm font-medium">{title}</h3>
    {icon}
  </div>
)

const CardContent = ({ children }) => <div className="px-4 pb-4">{children}</div>

const ProgressBar = ({ value }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${value}%` }}></div>
  </div>
)

const Badge = ({ children, color = "primary" }) => {
  const colorClasses = {
    primary: "bg-green-100 text-green-800",
    secondary: "bg-gray-100 text-gray-800",
  }
  return <span className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${colorClasses[color]}`}>{children}</span>
}

export default FarmerDashboard

