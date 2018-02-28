import React, { Component } from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/CartContainer';
import CartContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/* Products */}
            <ProductsContainer />
            {/* Message */}
            <MessageContainer />
            {/* Cart */}
            <CartContainer /> 
          </div>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
