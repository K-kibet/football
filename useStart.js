import React from 'react'

export default function useStart() {
    const [data, setData] = useData('');
  return data
}
