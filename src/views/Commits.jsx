import React from 'react'

export default (props) => {
  return (
    <div>
      <label>Add commits</label>
      { props.commits.map(commit => {
        return (
          <div key={commit.id}>
            <input type="checkbox" onClick={this.selectCommit} value={commit.payload.commits[0].message}/><span
            className='checkin-commit-msg'>{commit.payload.commits[0].message.slice(0, 50)} ...</span>
          </div>
        )
      })}
    </div>
  )
}
