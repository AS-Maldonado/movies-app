export const HEADERS = {
    HOST: "imdb236.p.rapidapi.com",
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY ?? "",
};

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `/imdb/search?type=movie&originalTitleAutocomplete=${encodeURIComponent(
              query
          )}`
        : "/imdb/search?type=movie&rows=25&sortOrder=ASC&sortField=id";

    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "x-rapidapi-key": HEADERS.API_KEY,
            "x-rapidapi-host": HEADERS.HOST,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch movies" + response.statusText);
    }

    const data = await response.json();

    return data;
};
