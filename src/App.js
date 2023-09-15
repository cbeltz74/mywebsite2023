import { Header, Footer, ProjectDetailsList } from './components';
import { HomePage, ResumeNew } from './pages';
import './App.css';

function App() {
  return (
    <main className="App">
      <Header />
      <HomePage />
      <ProjectDetailsList />
      <ResumeNew />
      <Footer />
    </main>
  );
}

export default App;
