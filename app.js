
const p1 = <p id="large">foo</p>
const p2 = <p id="small">bar</p>
const myArticle = <article>I am an article.</article>

const h1 = <h1>Hello world</h1>;
<p>Hello world</p>



var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render() {
    return <h1></h1>;
  }
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));