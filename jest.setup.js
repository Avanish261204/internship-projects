import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return ''
  },
}))

// Mock date-fns to ensure consistent date handling in tests
jest.mock('date-fns', () => ({
  ...jest.requireActual('date-fns'),
  format: jest.fn((date, formatStr) => {
    if (formatStr === 'yyyy-MM-dd') {
      return date.toISOString().split('T')[0]
    }
    if (formatStr === 'MMM dd, yyyy') {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })
    }
    if (formatStr === 'MMM dd') {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit'
      })
    }
    if (formatStr === 'MMMM yyyy') {
      return date.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      })
    }
    if (formatStr === 'd') {
      return date.getDate().toString()
    }
    return date.toString()
  })
})) 