import React from 'react'

export const ViewQuote = ({quote}) => {
  const viewQuote = {};

  const position = Math.trunc(Math.random() * quote.length);
  // viewQuote = quote[position];

  return (
    <div>
      <>
       { quote[position].text }
      </>
      {
        quote[position].author
      }
      botón siguiente cita
    </div>
  )
}
