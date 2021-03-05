import NavbarComponent from './components/NavbarComponent/index';
import UserPage from './pages/UserPage';

import GlobalStyles from './styles/globalstyles';
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <UserPage></UserPage>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyles></GlobalStyles>
    </div>
  );
}

export default App;
