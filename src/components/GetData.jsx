import calle from '../images/calle.jpg'
const quotes = require('../quotes.json')

const GetData = () => {
  return (
    <div id='getdata'>
      {quotes?.map((quote) => (
        <div id='quotes-card' key={quote.id}>
          <h3>
            <span className='text-style-one'>Quote: </span>
            {quote.quote}
          </h3>
          <h3>
            <span className='text-style-one'>Author: </span>
            {quote.author}
          </h3>
          <img className='icon' src={calle} alt='Calle' />
        </div>
      ))}
    </div>
  )
}

export default GetData

//   {
//     "id": 2,
//     "quote": "Hej jag heter Calle",
//     "author": "Adam Özmehak"
//   },
//   {
//     "id": 3,
//     "quote": "Hej jag heter Mahdi",
//     "author": "Mahdi Agerling"
//   },
//   {
//     "id": 4,
//     "quote": "Hej jag heter Mahdi",
//     "author": "Mahdi Agerling"
//   },
//   {
//     "id": 5,
//     "quote": "Hej jag heter Mahdi",
//     "author": "Mahdi Agerling"
//   }
