import { useEffect, useState } from 'react'

const GetData = () => {
  const [data, setData] = useState()

  const fetchQuotes = async () => {
    const response = await fetch('quotes.json')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  return (
    <div id='getdata'>
      {data?.map((quote) => (
        <div id='quotes-card' key={quote.id}>
          <h3 className='quote-h3'>
            <span className='text-style-one'>Quote: </span>
            {quote.quote}
          </h3>
          <h3>
            <span className='text-style-one'>Author: </span>
            {quote.author}
          </h3>
          <img className='icon' src={quote.image} alt='Calle' />
        </div>
      ))}
    </div>
  )
}

export default GetData
