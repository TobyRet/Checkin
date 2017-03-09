import React from 'react'

export default (props) => {
  return (
    <div>
      <label>Select yesterday's commits</label>
      { props.commits.map(commit => {
        return (
          <div key={commit.id}>
            <input type="checkbox" onClick={props.selectCommit} value={commit.payload.commits[0].message}/><span
            className='checkin-commit-msg'>{commit.payload.commits[0].message.slice(0, 75)} ...</span>
          </div>
        )
      })}
    </div>
  )
}
