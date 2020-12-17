import './App.css';
import AppHeader from './components/AppHeader';
import ContactsList from './components/ContactsList';

function App() {
  return (
    <div className="App">
      <AppHeader />
        <main>
          <ContactsList />
        </main>
    </div>
  );
}

export default App;
