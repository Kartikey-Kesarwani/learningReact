import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {latitude: null,Errormsg: ''};
        
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({latitude:position.coords.latitude}),
            err => this.setState({Errormsg:err.message})
        );
    }
    renderContent() {
        if (this.state.Errormsg && !this.state.latitude) {
          return <div>Error: {this.state.Errormsg}</div>;
        }
    
        if (!this.state.Errormsg && this.state.latitude) {
          return <SeasonDisplay latitude={this.state.latitude} />;
        }
    
        return <Loading message="Please accept location request" />;
      }
    
      render() {
        return <div className="border red">{this.renderContent()}</div>;
      }
};

ReactDOM.render(<App />, document.querySelector("#root"));