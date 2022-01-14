import { useEffect } from 'react';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';

const Home = () => {
  const [state, actions] = useCounterContext();

  useEffect(() => {
    actions.increase();
  }, [actions]);

  const handleError = () => {
    actions
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.error(e.name, ':', e.message));
  };

  return (
    <div>
      <Heading />
      <div>
        <Button onButtonClick={actions.increase}>Increase</Button>
        <Button onButtonClick={actions.decrease}>Decrease</Button>
        <Button onButtonClick={actions.reset}>Reset</Button>
        <Button onButtonClick={() => actions.set({ counter: 10 })}>Set 10</Button>
        <Button onButtonClick={() => actions.set({ counter: 100 })}>Set 100</Button>
        <Button disabled={state.loading} onButtonClick={actions.asyncIncrease}>
          async Increase
        </Button>
        <Button disabled={state.loading} onButtonClick={handleError}>
          async error
        </Button>
      </div>
    </div>
  );
};

export default Home;
