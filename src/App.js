import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/helpers/Footer';

import Header from './components/helpers/Header';
import Main from './components/layouts/Main';

function App() {
  return (
    <section className="App">
      <Header/>
      <Main/>
      <Footer/>

     
    </section>
  );
}

export default App;