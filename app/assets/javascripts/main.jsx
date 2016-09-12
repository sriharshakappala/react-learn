class Main extends React.Component {
  render() {
    return(
      <h1>Hello from main component</h1>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('react')
  );
}

$(documentReady);
