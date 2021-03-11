import { useEffect, useRef, useCallback } from 'react'
import { wrap as ComlinkWrap } from 'comlink'

export default function Index() {

  const comlinkWorkerRef = useRef()
  const comlinkWorkerApiRef = useRef()

  useEffect(() => {
    comlinkWorkerRef.current = new Worker(
      new URL('../pi.worker.js', import.meta.url),
      {
        type: 'module',
      }
    )
    comlinkWorkerApiRef.current = ComlinkWrap(
      comlinkWorkerRef.current
    )
    return () => {
      comlinkWorkerRef.current?.terminate()
    }
  }, [])

  const handleWork = useCallback(async () => {
    comlinkWorkerApiRef.current?.pi(100000)
  }, [])

  return (
    <div>
      <p>Do work in a WebWorker via Comlink!</p>
      <button onClick={handleWork}>Calculate PI</button>
    </div>
  )
}
