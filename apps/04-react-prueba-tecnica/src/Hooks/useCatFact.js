import { useState, useEffect } from 'react'
import { getRandomfact } from '../Services/fact.js'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomfact().then(setFact)
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
