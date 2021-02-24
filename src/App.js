import React from "react"
import ReactPaginate from "react-paginate"
import { chunk, orderBy, debounce } from "lodash"

import ProgressBlock from "./components/ProgressBlock"
import Search from "./components/Search"
import Table from "./components/Table"
import HeadTable from "./components/HeadTable"
import "./App.css"

function App() {
  const tableSize = 50
  const [state, setState] = React.useState([])
  const [dataTable, setDataTable] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(0)
  const [sort, setSort] = React.useState("asc")

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        setState(data)
        setDataTable(chunk(data, tableSize))
      })
  }, [])

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected)
  }

  const onSort = (sortField) => {
    const sortItem = sort === "asc" ? "desc" : "asc"
    const data = orderBy(state, sortField, sortItem)
    setDataTable(chunk(data, tableSize))
    setSort(sortItem)
  }
  const debounceSearch = React.useCallback(
    debounce((value) => onSearch(value), 300),
    []
  )
  const onSearch = (value) => {
    const data = state.filter(
      (item) =>
        item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
    setDataTable(chunk(data, tableSize))
  }

  return (
    <div className="container">
      <div>
        <ProgressBlock />
      </div>
      <Search debounceSearch={debounceSearch} />
      <table className="table">
        <HeadTable onSort={onSort} />
        <tbody>
          {dataTable.length
            ? dataTable[pageNumber].map((item, i) => <Table key={`${item}_${i}`} item={item} />)
            : null}
        </tbody>
      </table>
      {dataTable.length > tableSize ? (
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={dataTable.length}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          previousClassName={"page-link"}
          nextClassName={"page-link"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
        />
      ) : null}
    </div>
  )
}

export default App
