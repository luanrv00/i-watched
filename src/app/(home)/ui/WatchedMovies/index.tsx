import type { WatchItemType } from "@/app/types/types";
import { WatchItemInfo } from "..";

export function WatchedMovies({watchedItems}: {watchedItems: WatchItemType[]}) {
  if (!watchedItems.length) {
    return (
      <p>Add watched Movies</p>
    )
  }

  return (
    <>
      <h2>Watched Movies</h2>
      <ul>
        {watchedItems.map((watchedMovie: WatchItemType) => (
          <div key={watchedMovie.tmdbId} data-testid='watched-movies'>
            <WatchItemInfo watchItem={watchedMovie}/>
          </div>
        ))}
      </ul>
    </>
  )
}

