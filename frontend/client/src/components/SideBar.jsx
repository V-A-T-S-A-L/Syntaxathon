import { useState } from "react"
import {
  Home,
  TreesIcon as Plant,
  BarChart2,
  DollarSign,
  ShoppingCart,
  Book,
  Bell,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

const menuItems = [
  { icon: Home, label: "Overview", href: "#overview" },
  {
    icon: Plant,
    label: "Crops & Land",
    href: "#crops",
    subItems: [
      { label: "Field Map", href: "#field-map" },
      { label: "Crop Rotation", href: "#crop-rotation" },
      { label: "Soil Health", href: "#soil-health" },
    ],
  },
  { icon: BarChart2, label: "Analytics", href: "#analytics" },
  { icon: DollarSign, label: "Finance", href: "#finance" },
  { icon: ShoppingCart, label: "Marketplace", href: "#marketplace" },
  { icon: Book, label: "Community", href: "#community" },
  { icon: Bell, label: "Alerts", href: "#alerts" },
  { icon: Settings, label: "Settings", href: "#settings" },
]

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("Overview")
  const [expandedItem, setExpandedItem] = useState(null)

  return (
    <aside
      className={`bg-green-100 text-green-800 h-screen overflow-y-auto transition-all duration-300 ease-in-out fixed left-0 top-0 z-30 ${isOpen ? "w-64" : "w-16"}`}
    >
      <div className="p-4 border-b border-green-200 flex justify-between items-center">
        <h2
          className={`text-2xl font-bold transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
        >
          Farm Manager
        </h2>
        <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-green-200 transition-colors">
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div key={item.label}>
            <a
              href={item.href}
              className={`flex items-center justify-between p-2 hover:bg-green-200 hover:text-green-900 transition-colors duration-200 ${
                activeItem === item.label ? "bg-green-200 text-green-900 font-semibold" : ""
              }`}
              onClick={() => setActiveItem(item.label)}
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                <span
                  className={`transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}`}
                >
                  {item.label}
                </span>
              </div>
              {item.subItems && isOpen && (
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${expandedItem === item.label ? "transform rotate-90" : ""}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setExpandedItem(expandedItem === item.label ? null : item.label)
                  }}
                />
              )}
            </a>
            {item.subItems && isOpen && expandedItem === item.label && (
              <div className="ml-6 mt-1 space-y-1">
                {item.subItems.map((subItem) => (
                  <a
                    key={subItem.label}
                    href={subItem.href}
                    className="block p-2 text-sm hover:bg-green-200 hover:text-green-900 transition-colors duration-200"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar

