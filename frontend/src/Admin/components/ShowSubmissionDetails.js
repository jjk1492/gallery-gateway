import React from 'react'
import PropTypes from 'prop-types'

const ShowSubmissionDetails = props => {
  console.log(props)
  return (
    <div>
      <div>Title: {props.submission.title.toString()}</div>
      <div>
        Artist Name: {props.submission.student.firstName.toString()} {props.submission.student.lastName.toString()}
      </div>
      <div>
        Entry Type: {props.submission.entryType}
      </div>
    </div>
  )
}

ShowSubmissionDetails.propTypes = {
  submission: PropTypes.shape({
    entryType: PropTypes.string.isRequired,
    title: PropTypes.string,
    provider: PropTypes.string,
    videoId: PropTypes.string,
    path: PropTypes.string
  })
}

export default ShowSubmissionDetails
