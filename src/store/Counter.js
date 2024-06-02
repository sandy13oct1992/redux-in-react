import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {
   const counter = useSelector(state => state.counter);
   const dispatch = useDispatch();

   const incrementHandler = () => {
    dispatch({type: 'incrememt'});
   }

   const decrementHandler = () => {
    dispatch({type: 'decrememt'});
   }
    return(
        <div>
            <h1>Redux Counter</h1>
            <div>{counter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    )
}
export default Counter;