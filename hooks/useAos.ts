'use client'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export const useAOS = (duration = 1200) => {
  useEffect(() => {
    AOS.init({
      duration
    })

    return () => {
      AOS.refresh()
    }
  }, [duration])
}
