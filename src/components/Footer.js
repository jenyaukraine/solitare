import React from 'react'
import FaRotateLeft from 'react-icons/lib/fa/rotate-left'
import FaPlus from 'react-icons/lib/fa/plus'
import 'styles/Footer.sass'

const Footer = ({showNew, showRecords, undoMove, past, entering}) => (
  <div id="footer">
    <div className="left">
      {past === 0 ?
        <button className="disable"><FaRotateLeft /><span>Undo</span></button> :
        <button onClick={undoMove}><FaRotateLeft /><span>Undo</span></button>}
      {entering === true ?
        <button><FaPlus /><span>New</span></button> :
        <button onClick={showNew}><FaPlus /><span>New</span></button>}
    </div>
  </div>
)

export default Footer
