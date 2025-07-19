/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback, useRef } from "react";

export function useFetch<T = any>(
  url: string,
  options?: RequestInit,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const controllerRef = useRef<AbortController | null>(null);
  const triggerRefetch = useRef(0);

  const refetch = useCallback(() => {
    triggerRefetch.current += 1;
    setLoading(true);
  }, []);

  useEffect(() => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          ...options,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer test_khatabakhsh",
            ...options?.headers,
          },
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = (await response.json()) as T;
        setData(json);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(options), triggerRefetch.current, ...dependencies]);

  return { data, error, loading, refetch };
}
