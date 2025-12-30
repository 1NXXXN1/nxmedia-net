"use client";

import { useEffect, useState } from "react";
import { api } from "@/shared/api/base";

export function BestNewMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get("/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1")
      .then(res => setMovies(res.data.items ?? []))
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <section>
      {movies.map((m: any) => (
        <div key={m.kinopoiskId}>{m.nameRu}</div>
      ))}
    </section>
  );
}
