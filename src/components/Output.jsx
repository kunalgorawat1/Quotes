const Output = ({ quotes }) => {

    // const listItems = quotes.map((quote) => (
    //     <li key={item.id}>{quote_}</li>
    //   ));

    //   return (
    //     <ul>
    //       {listItems}
    //     </ul>
    //   );
    return (
        <ul>
            {quotes && quotes.map((quote, i) => (
                <li key={i}>{quote.quote}<br /><b>{quote.author}</b></li>
            ))}
        </ul>
    )
}

export default Output