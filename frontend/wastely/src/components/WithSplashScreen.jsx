import React, { Component } from "react";
// import logo from "../logo.svg";

function SplashMessage() {
  return (
    <div>
      Hi
    </div>
  );
}

export default function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        // Put here your await requests/ API requests
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}
