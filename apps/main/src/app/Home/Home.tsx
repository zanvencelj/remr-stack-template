import { useState } from 'react';
import {
  CalendarIcon,
  UserGroupIcon,
  ChartBarIcon,
  MapPinIcon,
  HeartIcon,
  UsersIcon,
  ClockIcon,
  Cog6ToothIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import CalendarView from '../components/CalendarView';
import Clients from '../components/Clients';
import AnalyticsView from '../components/AnalyticsView';
import Lokacija from '../components/Lokacija';
import Storitve from '../components/Storitve';
import Osebje from '../components/Osebje';
import Urnik from '../components/Urnik';
import SplošneNastavitvet from '../components/SplošneNastavitvet';
import Obvestila from '../components/Obvestila';



// Glavna Home komponenta, kjer prikažemo koledar in sidebar
export default function Home() {
  const [activeTab, setActiveTab] = useState('Koledar');

  // Funkcija za prikaz vsebine, glede na izbrani meni
  const renderContent = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{activeTab}</h2>
      {activeTab === 'Koledar' && <CalendarView />} {/* Prikaže koledar samo, če je izbrana ta stran */}
      {activeTab === 'Pregled strank' && <Clients/>}
      {activeTab === 'Analitika' && <AnalyticsView/>}
      {activeTab === 'Lokacija' && <Lokacija/>}
      {activeTab === 'Storitve' && <Storitve/>}
      {activeTab === 'Osebje' && <Osebje/>}
      {activeTab === 'Urniki' && <Urnik/>}
      {activeTab === 'Splošne nastavitve' && <SplošneNastavitvet/>}
      {activeTab === 'Obvestila' && <Obvestila/>}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Glavna vsebina */}
      <div className="flex-1 ml-64">{renderContent()}</div>
    </div>
  );
}

// Komponenta Sidebar (meni)
function Sidebar({ activeTab, setActiveTab }: any) {
  const MENU_ITEMS = [
    { name: 'Koledar', icon: CalendarIcon },
    { name: 'Pregled strank', icon: UserGroupIcon },
    { name: 'Analitika', icon: ChartBarIcon }
  ];

  const SETTINGS_ITEMS = [
    { name: 'Lokacija', icon: MapPinIcon },
    { name: 'Storitve', icon: HeartIcon },
    { name: 'Osebje', icon: UsersIcon },
    { name: 'Urniki', icon: ClockIcon },
    { name: 'Splošne nastavitve', icon: Cog6ToothIcon },
    { name: 'Obvestila', icon: BellIcon }
  ];

  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-15 border-r border-gray-200 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 bg-green-100 border-b">
        <h1 className="text-2xl font-bold text-gray-900">testTin</h1>
        <p className="text-sm text-gray-500">Booking sistem</p>
      </div>

      {/* Navigacija */}
      <nav className="flex-1 px-4 space-y-1 pt-4">
        {MENU_ITEMS.map((item) => (
          <SidebarButton key={item.name} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}

        {/* Divider za Nastavitve */}
        <p className="text-sm text-gray-500 px-3 mt-4">Nastavitve</p>

        {SETTINGS_ITEMS.map((item) => (
          <SidebarButton key={item.name} item={item} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </nav>

      {/* Uporabniški meni */}
      <UserSection />
    </div>
  );
}

// Komponenta za gumb v Sidebarju
function SidebarButton({ item, activeTab, setActiveTab }: any) {
  return (
    <button
      onClick={() => setActiveTab(item.name)}
      className={`w-full flex items-center gap-3 p-3 rounded-lg transition ${
        activeTab === item.name ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <item.icon className="w-5 h-5" />
      {item.name}
    </button>
  );
}

// Komponenta za uporabniški meni in odjavo
function UserSection() {
  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
        <UserCircleIcon className="w-6 h-6 text-gray-500" />
        <div>
          <p className="text-sm font-medium">Uporabnik</p>
          <p className="text-xs text-gray-500">Odjava</p>
        </div>
      </div>

      <button className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-100 rounded-lg mt-2">
        <ArrowLeftOnRectangleIcon className="w-5 h-5" />
        Odjava
      </button>
    </div>
  );
}
