import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const usePersistedState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const storageValue = JSON.parse(localStorage.getItem(key))
    if (storageValue) {
      return storageValue
    }
    return initialValue || ''
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

usePersistedState.propTypes = {
  key: PropTypes.string.isRequired,
  initialValue: PropTypes.string,
}

export { usePersistedState }
