import React from "react"

const Search = ({ debounceSearch }) => {
  const [inputValue, setInputValue] = React.useState("")
  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    debounceSearch(value)
  }

  return (
    <div className="input-group mb-3 mt-3">
      <span className="input-group-text" id="inputGroup-sizing-default">
        Search
      </span>
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  )
}
export default Search
