import React from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { ANT_INIT, ANT_IN_PROGRESS, ANT_CALCULATED } from './reducers/ants';
import { UI_IN_PROGRESS, UI_CALCULATED } from './reducers/ui';
import ProgressBarTimer, { ProgressBar } from './components/Progress';

function generateAntWinLikelihoodCalculator(id,inProgress) {
  var delay = 7000 + Math.random() * 7000;
  var likelihoodOfAntWinning = Math.random();
  inProgress(id,delay)
  return function (callback) {
    setTimeout(function () {
      callback(id, likelihoodOfAntWinning);
    }, delay);
  }
}

class App extends React.Component {
  componentWillMount() {
    const { queryData, initalize, } = this.props;
    initalize(queryData.ants);
  }

  startTest = () => {
    const { queryData, uiInProgress, inProgress, uiCompleted, completed } = this.props;
    uiInProgress();
    const requests = queryData.ants.map((element) => {
      return new Promise((resolve) => {
        const generate = generateAntWinLikelihoodCalculator(element.name,inProgress)
        generate((id, likelihoodOfAntWinning) => resolve({ id, likelihoodOfAntWinning }))
      })
      .then(({ id, likelihoodOfAntWinning }) => completed(id, likelihoodOfAntWinning))
    });
    Promise.all(requests).then(() => uiCompleted())
  }

  render() {
    const { ants, ui } = this.props;
    const values = Object.values(ants);
    values.sort((a, b) => a.likelihoodOfAntWinning - b.likelihoodOfAntWinning);
    return (
      <div>
        {(function () {
          switch (ui.state) {
            case UI_CALCULATED:
              return <div>
               Race Calculated 
               Winner {values[values.length-1].name}
              </div>
            case UI_IN_PROGRESS:
              return <div>
                Race in Progress
                &nbsp;
                Ants Completed:
                { ui.antsCompleted }
                &nbsp;
                Ants In Progress: 
                {ui.antsInProgress}
                <ProgressBar percentage={ui.antsCompleted / values.length * 100} />
              </div>
            default:
              return <div>Click the Button To Start The Race</div>
          }
        })()
        }
        <ul>
          {values.map((ant, id) => (
            <li key={id}>
            <ul>
              <li> Name:   {ant.name} </li>
              <li> Weight: {ant.weight} </li>
              <li> Color:  {ant.color} </li> 
              <li> Length: {ant.length} </li>
              {ant.likelihoodOfAntWinning && <span>
                  Likely Hood of Ant Winning
                  &nbsp;
                  {ant.likelihoodOfAntWinning.toFixed(2) * 100 }
                  %
              </span>}  
            </ul>
              {ant.state === ANT_IN_PROGRESS && <ProgressBarTimer interval={ant.delay} /> }
            </li>
          ))}
        </ul>
        <button disabled={ui.buttonDisabled} onClick={this.startTest}>Start Test</button>
      </div>
    )
  }
}

// Redux Component Wrapper
const ReduxWapper = connect(
  ({ ants, ui }) => ({
    ants,
    ui,
  }),
  (dispatch) => ({
    uiInProgress: () => dispatch({ type: UI_IN_PROGRESS }),
    uiCompleted: () => dispatch({ type: UI_CALCULATED }),
    initalize: (ants) => dispatch({ type: ANT_INIT, payload: ants }),
    inProgress: (id,delay) => dispatch({ type: ANT_IN_PROGRESS, payload: { id, delay } }),
    completed: (id, likelihoodOfAntWinning) => dispatch({ type: ANT_CALCULATED, payload: { id, likelihoodOfAntWinning }})
  })
)(App)

const data = gql`
query GetAnts{
  ants {
    weight,
    name,
    color,
    length,
  }
}
`;

// Graphql QL Wrapper Component
const QueryWrapper = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Query query={data}>
        {({ data, loading }) => {
          if (loading) {
            return <div>Loading ...</div>;
          }
          return (
            <ReduxWapper queryData={data} />
          )
        }}
      </Query>
    </header>
  </div>
);

export default (QueryWrapper);