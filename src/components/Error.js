import { useRouteError } from "react-router-dom";

const Error = (err) => {
  const error = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oooops!!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
