import React from 'react'

function QuickViewDetailsRow({ rowTitle, rowContent, rowStyles }) {
  return (
    <div className={ rowStyles }>
        <p>{ rowTitle }</p>
        <p>{ rowContent }</p>
    </div>
  )
}

export default QuickViewDetailsRow