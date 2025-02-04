import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { Button, Row, Col } from 'reactstrap'
import moment from 'moment'

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  margin-top: 15px;
  padding: 10px;
  width: 100%;
`

const BeforeJudging = () => (
  <Col className='text-center mt-5'>
    Judging hasn't started yet. Come back to vote soon!
  </Col>
)

const DuringJudging = ({ ownVotes, portfolios, id }) => (
  <Col>
    <h4>Progress</h4>
    <p>
      {ownVotes.length} / {portfolios.filter(s => !s.excludeFromJudging).length}
    </p>
    <Button
      className='mt-5'
      style={{ cursor: 'pointer' }}
      color='primary'
      block
      tag={Link}
      to={`scholarship/${id}`}
    >
      {ownVotes.length === 0
        ? 'Start'
        : ownVotes.length === portfolios.length ? 'Review' : 'Resume'}
    </Button>
  </Col>
)

// NOTE: We don't have to handle the 'isAfter' case because the card
// will not be visible after the judging period has ended
const renderBasedOnJudgingPeriod = props => {
  if (moment().isBefore(moment(props.judgingStart))) {
    return <BeforeJudging />
  }
  return <DuringJudging {...props} />
}

const ScholarshipCard = props => (
  <Card>
    <h2>{props.name}</h2>
    <Row>
      <Col>
        <h4>Judging Period</h4>
        <dl>
          <dt>Opens:</dt>
          <dd>
            <Moment format='MMMM D, YYYY hh:mm:ss a'>
              {props.judgingStart}
            </Moment>
          </dd>
          <dt>Closes:</dt>
          <dd>
            <Moment format='MMMM D, YYYY hh:mm:ss a'>{props.judgingEnd}</Moment>
          </dd>
        </dl>
      </Col>
      {renderBasedOnJudgingPeriod(props)}
    </Row>
  </Card>
)

ScholarshipCard.defaultProps = {
  portfolios: [],
  ownVotes: []
}

ScholarshipCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  judgingStart: PropTypes.string.isRequired,
  judgingEnd: PropTypes.string.isRequired,
  portfolios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ),
  ownVotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  )
}

export default ScholarshipCard
