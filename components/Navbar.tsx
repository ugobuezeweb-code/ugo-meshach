"use client"

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header-blur fixed top-0 left-0 w-full z-50">
      <nav className="navbar container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-2 font-extrabold text-lg text-white">
          <i className="bi bi-brilliance text-xl"></i>
          <span>Ugochukwu Meshach</span>
        </a>
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i className={isOpen ? 'bi bi-x' : 'bi bi-list'}></i>
        </button>
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex md:items-center md:gap-4 bg-gray-900 bg-opacity-90 md:bg-transparent absolute md:static top-full left-0 w-full md:w-auto p-4 md:p-0 flex-col md:flex-row`}
          id="navbarNav"
        >
          <a className="btn-ghost block md:inline-block text-center py-2 md:py-0" href="/projects">
            <i className="bi bi-grid-3x3-gap mr-1"></i> Projects
          </a>
          <a className="btn-ghost block md:inline-block text-center py-2 md:py-0" href="/about">
            <i className="bi bi-person-badge mr-1"></i> About
          </a>
          <a className="btn-ghost block md:inline-block text-center py-2 md:py-0" href="/hire-me">
            <i className="bi bi-envelope-paper-heart mr-1"></i> Hire Me
          </a>
          <a className="btn-ghost block md:inline-block text-center py-2 md:py-0" href="/resume.pdf">
            <i className="bi bi-download mr-1"></i> Download Resume
          </a>
        </div>
      </nav>
    </header>
  )
}