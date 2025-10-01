import useSWR from "swr";

interface FetchError extends Error {
  info?: unknown;
  status?: number;
}

export function useCryptoData() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/monedas`;

  const { data, error, isLoading } = useSWR(
    apiUrl,

    async (url) => {
      const response = await fetch(url);

      // Si la respuesta no es exitosa (ej: error 404 o 500), creamos y lanzamos un error.
      if (!response.ok) {
        const error: FetchError = new Error("Error al obtener los datos.");

        error.info = await response.json();
        error.status = response.status;
        throw error;
      }
      return response.json();
    },
    {
      refreshInterval: 900000,
      revalidateOnFocus: true,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
}
