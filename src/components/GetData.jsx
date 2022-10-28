import quotes from '../quotes.json'

const GetData = () => {
  return (
    <div id='getdata'>
      {quotes?.map((quote) => (
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
