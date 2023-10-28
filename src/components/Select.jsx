const Select = ({ options, selectedOption, setSelectedOption }) => {

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
    }

    return (
        <select className="select-component" value={selectedOption} onChange={handleChange}>
            {
                options.map(option => (
                    <option id={option.id} key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    )
}

export default Select;