'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface GlobalContextType {
  currentCategory: string
  setCurrentCategory: (category: string) => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [currentCategory, setCurrentCategory] = useState('all')

  return (
    <GlobalContext.Provider value={{ currentCategory, setCurrentCategory }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }
  return context
} 