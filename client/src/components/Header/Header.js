import React from 'react'
import '../../css/Header/Header.css'
import { words } from '../../data/words'
const Header = () => {
  return (
    <header>
        {words.headertitle}
      </header>
  )
}

export default Header