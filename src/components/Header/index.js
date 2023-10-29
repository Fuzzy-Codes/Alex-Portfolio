import React from 'react'
import './style.css'


const styles = {
  header: {
    background: 'lightblue'
  },
}

function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1 className='headerName'>Alex Colwell</h1>
    </header>
  );
}

export default Header
