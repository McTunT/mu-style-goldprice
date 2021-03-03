import useStickySWR from '../lib/useStickySWR'

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

function useDataGraph() {
  return useStickySWR('/api/gold/datagraph', fetcher, {
    refreshInterval: 0,
  } as any)
}

export default useDataGraph
