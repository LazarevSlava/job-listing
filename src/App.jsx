import { Header } from './components/Header';
import { Main } from './components/Main';
import { JobsDataContext } from './helpers/JobsDataContext';

function App() {
  return (
    <>
      <JobsDataContext>
        <Header />
        <Main />
      </JobsDataContext>
    </>
  );
}

export default App;
