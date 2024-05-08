import React from 'react'
import LinkAtom from '../atoms/LinkAtom'

type Props = {}

export default function NavbarOrganism({ }: Props) {
  return (
    <nav className='w-full bg-base-100 '>
      <div className="navbar max-w-[1360px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><LinkAtom url="/projects">Projects</LinkAtom></li>
              <li><LinkAtom url="/contact">Contact</LinkAtom></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-neutral text-2xl">
            <li><LinkAtom url="/projects">Projects</LinkAtom></li>
            <li><LinkAtom url="/contact">Contact</LinkAtom></li>
          </ul>
        </div>
      </div>
    </nav>


  )
}
