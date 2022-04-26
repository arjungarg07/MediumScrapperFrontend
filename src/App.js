import logo from './logo.svg';
import './App.css';
import BlogsTable from './components/BlogsTable';

function App() {
  return (
    <div className="App">
      <div className="text-xl">
        Medium Scrapper
      </div>
      <BlogsTable></BlogsTable>
    </div>
  );
}

export default App;
