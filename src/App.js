import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// main layout
function App() {
  return (
    <div id="page-container">
            <main id="content-wrap">
                <Header></Header>
            </main>
                <Footer></Footer>
    </div>
  );
}
// export App()
export default App;
