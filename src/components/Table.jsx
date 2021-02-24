import React from "react"

const Table = ({ item }) => (
  <tr>
    <th>{item.id}</th>
    <td>{item.name}</td>
    <td>{item.email}</td>
  </tr>
)
export default Table
