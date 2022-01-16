import './App.css';
// import './src/Styles/LoginStyle.css';

import Login from './Container/Login'
import Dashboard from './Container/Dashboard'
import Article from './Container/Article'
import SubmitForm from './Container/Form'
import AppRoutes from './Routes/Routes';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store=>store)
  console.log(store,"STORE")
  return (
    <AppRoutes />
  );
}

export default App;
