import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HomePage } from '@/components/pages/HomePage'
import { AboutPage } from '@/components/pages/AboutPage'
import { OperationsPage } from '@/components/pages/OperationsPage'
import { CommunityPage } from '@/components/pages/CommunityPage'
import { InvestmentPage } from '@/components/pages/InvestmentPage'

export type PageType = 'home' | 'about' | 'operations' | 'community' | 'investment'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />
      case 'about':
        return <AboutPage />
      case 'operations':
        return <OperationsPage />
      case 'community':
        return <CommunityPage />
      case 'investment':
        return <InvestmentPage />
      default:
        return <HomePage onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
