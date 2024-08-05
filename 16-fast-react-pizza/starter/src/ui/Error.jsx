import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="px-4 py-6">
      <div className="p-2 rounded-md bg-red-100">
        <h1 className="text-xl font-bold mb-2">Something went wrong 😢</h1>
        <p className="mb-5 text-sm font-semibold">
          {error.data || error.message}
        </p>
      </div>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
