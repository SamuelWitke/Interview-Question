import React from 'react';

export default class ProgressBarExample extends React.Component {
    state = {
        counter: 0,
        intervalId: null,
    }
    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }
    componentDidMount() {
        const intervalId = setInterval(this.timer, 1000);
        this.setState({ intervalId: intervalId });
    }
    timer = () => {
        console.log("here")
        console.log(this.props.interval, this.state.counter)
        if (this.props.interval > this.state.counter) {
            this.setState({ counter: this.state.counter + 1000 });
        } else {
            clearInterval(this.timer)
        }
    }
    render() {
        return (
            <ProgressBar percentage={this.state.counter / this.props.interval * 100} />
        )
    }
}

const ProgressBar = (props) => (
    <div className="progress-bar">
        <Filler percentage={props.percentage} />
    </div>
)

const Filler = (props) => (
    <div className="filler" style={{ width: `${props.percentage}%` }} />
  )