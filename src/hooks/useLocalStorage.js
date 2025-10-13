import { useEffect, useRef, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(function () {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      console.log("Error loading stored items:", error);
      return initialValue;
    }
  });

  const hasMounted = useRef(false);

  useEffect(
    function () {
      if (hasMounted.current) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.error("Error writing to localStorage:", error);
        }
      } else {
        hasMounted.current = true;
      }
    },
    [key, value]
  );

  return [value, setValue];
}
