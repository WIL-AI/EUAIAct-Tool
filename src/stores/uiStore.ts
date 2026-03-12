import { create } from 'zustand'

interface UIStore {
  sidebarOpen: boolean
  theme: 'light' | 'dark'
  toggleSidebar: () => void
  setTheme: (theme: 'light' | 'dark') => void
}

function getInitialTheme(): 'light' | 'dark' {
  return (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
}

function applyTheme(theme: 'light' | 'dark') {
  const root = document.documentElement
  if (theme === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

const initialTheme = getInitialTheme()
applyTheme(initialTheme)

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: false,
  theme: initialTheme,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    applyTheme(theme)
    set({ theme })
  },
}))
