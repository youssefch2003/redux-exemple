
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import Test from './parent/fils/Test'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <h1>hi</h1>
      <Profile/>
      <Login/>
      <Test/>
    </Provider>
    </>
  )
}

export default App
