import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { CompliancePage } from './pages/CompliancePage'
import { TrainingPage } from './pages/TrainingPage'
import { SettingsPage } from './pages/SettingsPage'

export default function App() {
  return (
    <BrowserRouter basename="/EUAIAct-Tool">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CompliancePage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
