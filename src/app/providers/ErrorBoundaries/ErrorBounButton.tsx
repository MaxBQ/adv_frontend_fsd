import { useEffect, useState } from "react";

export const ErrorBounButton = () => {
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <button
      onClick={() => {
        setError(true);
      }}
    >
      Error
    </button>
  );
};
