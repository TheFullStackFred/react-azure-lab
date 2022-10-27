import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FetchData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('')
      .then((response) => response.json())
      .then((result) => {
        setData(result)
        console.log(result)
      })
  }, [])

  return <div>FetchData</div>
}

export default FetchData
