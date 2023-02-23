import './App.css';
import { counterActions } from './store/counter';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import {getUserFetch} from './actions';


function App() {

  // const dispatch = useDispatch()
  // const counter = useSelector((state) => state.counter.counter)

  // const incrementHandler = () => {
  //   dispatch(counterActions.increment())
  // }
  // const decrementHandler = () => {
  //   dispatch(counterActions.decrement())
  // }
  // const increaseHandler = () => {
  //   dispatch(counterActions.increase(5))
  // }

  // return (
  //   <div className="App">
  //     <h2>React counter</h2>
  //     <div>{counter}</div>
  //     <button onClick={incrementHandler}>Increment</button>
  //     <button onClick={decrementHandler}>Decrement</button>
  //     <button onClick={increaseHandler}>Increase by 5</button>
  //   </div>
  // );

  const dispatch = useDispatch()
  const users = useSelector(state => state.myFirstReducer.users)

  return (
    <div className='App'>
      <button onClick={() => dispatch(getUserFetch())}>Get Users</button>
      <div>Users: {users.map((user => (<div>{user.name}</div>)))}</div>
    </div>
  )
}

export default App;
