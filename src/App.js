import { Provider } from 'react-redux';
import GetUsers from './components/GetUsers';
import UserCard from './components/usercard';
import appStore from './redux/appStore';
import FeedBackForm from './components/FeedBackForm';

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <GetUsers />
        <UserCard />
      </div>
    </Provider>
  );
}

export default App;
