import * as React from 'react'

type Callback = () => void

/**
 * A declarative interval hook.
 *
 * The interval can be paused by setting the delay to null.
 *
 * This hook is based on this article:
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 *
 * @param callback - callback function
 * @param delay - value in miliseconds
 *
 * @example
 *
 * const callback = () => console.log('Hello')
 * useInterval(callback, 1000)
 */
export function useInterval(callback: Callback, delay: number | null): void {
  const savedCallback = React.useRef<Callback>(() => undefined)

  // Remember the latest function
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const intervalId = setInterval(tick, delay)
      return () => clearInterval(intervalId)
    }
  }, [delay])
}
