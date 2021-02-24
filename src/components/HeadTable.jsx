import React from "react"

const HeadTable = ({ onSort }) => (
  <thead>
    <tr>
      <th onClick={onSort.bind(null, "id")}>#</th>
      <th onClick={onSort.bind(null, "name")}>Text</th>
      <th onClick={onSort.bind(null, "email")}>Email</th>
    </tr>
  </thead>
)
export default HeadTable
