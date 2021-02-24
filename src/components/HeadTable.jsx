import React from "react"
import classNames from "class-names"

const HeadTable = ({ onSort, selectSort }) => {
  return (
    <thead>
      <tr>
        <th onClick={onSort.bind(null, "id")}>
          #
          <Arrow title="id" name={selectSort.name} line={selectSort.line} />
        </th>
        <th onClick={onSort.bind(null, "name")}>
          Text
          <Arrow title="name" name={selectSort.name} line={selectSort.line} />
        </th>
        <th onClick={onSort.bind(null, "email")}>
          Email
          <Arrow title="email" name={selectSort.name} line={selectSort.line} />
        </th>
      </tr>
    </thead>
  )
}

const Arrow = ({ name, line, title }) => {
  return (
    <img
      className={classNames("arrow", {
        "arrow-active": title === name,
        "arrow-line": "desc" === line
      })}
      src="https://www.flaticon.com/svg/vstatic/svg/32/32195.svg?token=exp=1614188971~hmac=1ad1ec51c2e646ecb5c454b0d393cd68"
      alt={title}
    />
  )
}
export default HeadTable
