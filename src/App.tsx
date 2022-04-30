import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import { useGetPokemonByNameQuery } from "./services/pokemon";
import { RootState } from "./store/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  return (
    <>
      <h1>Hello World!</h1>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h2>Dados pokemon</h2>
      {error ? (
        <span>Error</span>
      ) : isLoading ? (
        <span>Loading ...</span>
      ) : (
        <p>{JSON.stringify(data)}</p>
      )}
    </>
  );
}

export default App;
