import { useState, useEffect, useCallback } from 'react'
import dataService from './dataService'

// Custom hook for real-time data synchronization
export function useBookings() {
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)

  const loadBookings = useCallback(() => {
    setLoading(true)
    const data = dataService.getBookings()
    setBookings(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadBookings()
  }, [loadBookings])

  const addBooking = useCallback((bookingData) => {
    const newBooking = dataService.addBooking(bookingData)
    loadBookings()
    return newBooking
  }, [loadBookings])

  const updateBooking = useCallback((id, updates) => {
    const updated = dataService.updateBooking(id, updates)
    loadBookings()
    return updated
  }, [loadBookings])

  const deleteBooking = useCallback((id) => {
    const success = dataService.deleteBooking(id)
    if (success) loadBookings()
    return success
  }, [loadBookings])

  const updateStatus = useCallback((id, status) => {
    const updated = dataService.updateBookingStatus(id, status)
    loadBookings()
    return updated
  }, [loadBookings])

  return {
    bookings,
    loading,
    addBooking,
    updateBooking,
    deleteBooking,
    updateStatus,
    refresh: loadBookings
  }
}

export function useInquiries() {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)

  const loadInquiries = useCallback(() => {
    setLoading(true)
    const data = dataService.getInquiries()
    setInquiries(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    loadInquiries()
  }, [loadInquiries])

  const addInquiry = useCallback((inquiryData) => {
    const newInquiry = dataService.addInquiry(inquiryData)
    loadInquiries()
    return newInquiry
  }, [loadInquiries])

  const updateInquiry = useCallback((id, updates) => {
    const updated = dataService.updateInquiry(id, updates)
    loadInquiries()
    return updated
  }, [loadInquiries])

  const deleteInquiry = useCallback((id) => {
    const success = dataService.deleteInquiry(id)
    if (success) loadInquiries()
    return success
  }, [loadInquiries])

  const updateStatus = useCallback((id, status) => {
    const updated = dataService.updateInquiryStatus(id, status)
    loadInquiries()
    return updated
  }, [loadInquiries])

  return {
    inquiries,
    loading,
    addInquiry,
    updateInquiry,
    deleteInquiry,
    updateStatus,
    refresh: loadInquiries
  }
}

export function useStats() {
  const [stats, setStats] = useState({
    bookings: dataService.getBookingStats(),
    inquiries: dataService.getInquiryStats()
  })

  const refreshStats = useCallback(() => {
    setStats({
      bookings: dataService.getBookingStats(),
      inquiries: dataService.getInquiryStats()
    })
  }, [])

  useEffect(() => {
    // Set up interval to refresh stats every 30 seconds
    const interval = setInterval(refreshStats, 30000)
    return () => clearInterval(interval)
  }, [refreshStats])

  return { stats, refreshStats }
}

// Hook for data service events (for real-time updates across components)
export function useDataService() {
  const [version, setVersion] = useState(0)

  const triggerUpdate = useCallback(() => {
    setVersion(prev => prev + 1)
  }, [])

  return {
    version,
    triggerUpdate,
    dataService
  }
}