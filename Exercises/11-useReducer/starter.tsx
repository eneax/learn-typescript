import * as React from "react";

/**
 * The App component uses a custom useFetch hook which
 * tracks its state with useReducer.
 *
 * You'll need to implement the fetchReducer function and
 * assign types to its parameters.
 *
 * Don't forget: Reducers are much easier to implement
 * in TypeScript if you use a discriminating union for the
 * Action type.
 *
 * Add any other type annotations where necessary, By the time
 * you are done, the red squiggles should be gone.
 *
 * Bonus points: Try making useFetch into a generic function so
 * it can be used with more than just the dad joke API.
 */

interface DadJokeResponse {
  id: string;
  joke: string;
  status: 200;
}
const JOKE_URL = "https://icanhazdadjoke.com/";

function fetchReducer(state: unknown, action: unknown) {
  //  Implement your reducer here.
  return state;
}

function useFetch(url: string) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    state: "loading",
    data: null,
    error: null,
  });

  React.useEffect(() => {
    async function performFetch() {
      try {
        const response = await fetch(url, {
          headers: {
            accept: "application/json",
          },
        });
        const data: DadJokeResponse = await response.json();
        dispatch({ type: "data", data });
      } catch (error) {
        dispatch({ type: "error", error });
      }
    }
    dispatch({ type: "loading" });
    performFetch();
  }, [url]);
  return state;
}

export default function App() {
  const { state, data, error } = useFetch(JOKE_URL);
  if (state === "loading") return <div>Loading...</div>;
  if (state === "error") return <div>Error: {error?.message}</div>;
  if (state === "data") return <div>{data?.joke}</div>;
  throw new Error("This should never happen.");
}
