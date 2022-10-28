const quotes = require('../quotes.json')

const GetData = () => {
  return (
    <div id='getdata'>
      {quotes?.map((quote) => (
        <div id='quotes-card' key={quote.id}>
          <h3>
            Quote:
            {quote.quote}
          </h3>
          <h3>Name:{quote.author}</h3>
        </div>
      ))}
    </div>
  )
}

export default GetData
