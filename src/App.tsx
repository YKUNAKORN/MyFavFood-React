import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CashControl from './pages/CashControl';
import CashDrop from './pages/CashDrop';
import CashInDrawer from './pages/CashInDrawer';
import DateDelivery from './pages/DateDelivery';
import DateEditWaste from './pages/DateEditWaste';
import DateStock from './pages/DateStock';
import Delivery from './pages/Delivery';
import EditDelivery from './pages/EditDelivery';
import EditProfile from './pages/EditProfile';
import EditWaste from './pages/EditWaste';
import Employees from './pages/Employees';
import EndDay from './pages/EndDay';
import FinishedWaste from './pages/FinishedWaste';
import Information from './pages/Information';
import Inventory from './pages/Inventory';
import NewWaste from './pages/NewWaste';
import Overview from './pages/Overview';
import RecallOrder from './pages/RecallOrder';
import Reprint from './pages/Reprint';
import RingSales from './pages/RingSales';
import SignUp from './pages/SignUp';
import StartDay from './pages/StartDay';
import Stock from './pages/Stock';
import TimePunch from './pages/TimePunch';
import Void from './pages/Void';
import Waste from './pages/Waste';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cash-control" element={<CashControl />} />
      <Route path="/cash-drop" element={<CashDrop />} />
      <Route path="/cash-in-drawer" element={<CashInDrawer />} />
      <Route path="/date-delivery" element={<DateDelivery />} />
      <Route path="/date-edit-waste" element={<DateEditWaste />} />
      <Route path="/date-stock" element={<DateStock />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/edit-delivery" element={<EditDelivery />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/edit-waste" element={<EditWaste />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/end-day" element={<EndDay />} />
      <Route path="/finished-waste" element={<FinishedWaste />} />
      <Route path="/information" element={<Information />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/new-waste" element={<NewWaste />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/recall-order" element={<RecallOrder />} />
      <Route path="/reprint" element={<Reprint />} />
      <Route path="/ring-sales" element={<RingSales />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/start-day" element={<StartDay />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/time-punch" element={<TimePunch />} />
      <Route path="/void" element={<Void />} />
      <Route path="/waste" element={<Waste />} />
    </Routes>
  );
}

export default App;
