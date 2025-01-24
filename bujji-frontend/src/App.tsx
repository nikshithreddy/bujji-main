import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Personal from './pages/Personal';
import Professional from './pages/Professional';
import Financial from './pages/Financial';


function App() {

  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      {/* <TopNav /> */}
      <div className="flex flex-col md:flex-row pt-16 pb-16 md:pb-0">
        {/* <Sidebar /> */}
        <div className="flex-1 md:ml-64 w-full">
          <main className="bg-gray-50 min-h-[calc(100vh-64px)]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/professional" element={<Professional />} />
              <Route path="/financial" element={<Financial />} />

            </Routes>
          </main>
        </div>
      </div>
      {/* <MobileNav /> */}
    </div>
  </Router>
  )
}

export default App
