import { Header } from './components/Header';
import { Main } from './components/Main';
import { JobsDataContext } from './helpers/JobsDataContext';
import { SelectedCharacteristicsContext } from './helpers/SelectedCharacteristicsContext';

function App() {
  return (
    <>
      <JobsDataContext>
        <SelectedCharacteristicsContext>
          <Header />
          <Main />
        </SelectedCharacteristicsContext>
      </JobsDataContext>
    </>
  );
}

export default App;
