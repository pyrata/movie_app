import React from "react";
class Details extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (!location.state) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      console.log(location.state.title);
      return <span>{location.state.title}</span>;
    }
    return null;
  }
}

export default Details;
