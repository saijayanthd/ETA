import React from 'react'; 
import ReactDom from 'react-dom';

export class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var self = this;
    setInterval(function(){
      self.setState({
            isLoaded: true,
            items: [
              { id: self.state.items.id+1, name: 'Apples', price: '$2' },
              { id: 2, name: 'Peaches', price: '$5' }
            ] 
          }
          );
    },2000)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price} {item.id}
            </li>
          ))}
        </ul>
      );
    }
  }
}