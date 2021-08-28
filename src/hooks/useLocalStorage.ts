import * as React from 'react'
import { isBrowser } from '../utils/misc'

/**
 * React hook to manage a single localStorage key.
 *
 * @param key - the local storage key name
 * @param initialValue
 * @returns - the key value and a update funcion as a tuple: [state, setState]
 *
 * @example
 *
 * const [value, setValue] = useLocalStorage('keyName')
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  if (!isBrowser) {
    return [initialValue, () => undefined]
  }

  const initializer = React.useCallback(() => {
    try {
      const storageValue = localStorage.getItem(key)
      return storageValue ? JSON.parse(storageValue) : initialValue
    } catch (err) {
      // If user is in private mode or has storage restriction localStorage can
      //throw an error. JSON.parse can throw, too.
      console.warn(err)
      return initialValue
    }
  }, [key, initialValue])

  const [state, setState] = React.useState<T>(initializer)

  const setStorageState = React.useCallback(
    (value: T) => {
      try {
        localStorage.setItem(key, JSON.stringify(value))
        setState(value)
      } catch (err) {
        // If user is in private mode or has storage restriction localStorage
        // can throw an error. JSON.stringify can throw, too.
        console.warn(err)
      }
    },
    [key]
  )

  return [state, setStorageState]
}
