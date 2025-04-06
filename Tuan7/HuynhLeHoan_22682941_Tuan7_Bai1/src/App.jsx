import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/DashBoard';
import Project from './pages/Project';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Messages from './pages/Messages';
import Integrations from './pages/Integrations';
import Overview from './components/OverviewCard';

function App() {
  return (
    <Router>
      <div className="container min-h-screen">
        <div className="header">
          <Header />
        </div>

        <div className="menu">
          <Sidebar />
        </div>

  
        <div className="content space-y-4">
          <Overview />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project" element={<Project />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>


        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    </Router>
  );
}

export default App;
