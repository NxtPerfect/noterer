import React from 'react'

export default function Nav() {
  return (
    <nav className="grid grid-cols-3">
      <form>
      {
        // TODO: on submit search notes
      }
        <input type="text" className="bg-gray-500" placeholder="Search notes"></input>
      </form>
    </nav>
  )
}
