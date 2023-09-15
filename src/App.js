import { Header, Footer } from './components';
import { projectSummaryList } from './components';
import { HomePage } from './pages';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <HomePage />
      <projectSummaryList />
      <Footer />
    </main>
  );
}

export default App;
