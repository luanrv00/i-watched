import type { WatchItemType } from "@/app/types/types";
import { WatchItemInfo } from "..";

export function WatchedTvSeries({watchedItems}: {watchedItems: WatchItemType[]}) {
  if (!watchedItems.length) {
    return (
      <p>Add watched TV Series</p>
    )
  }

  return (
    <>
      <h2>Watched TV Series</h2>
      <ul>
        {watchedItems.map((watchedTVSeries: WatchItemType) => (
          <div key={watchedTVSeries.tmdbId} data-testid='watched-tvseries'>
            <WatchItemInfo watchItem={watchedTVSeries}/>
          </div>
        ))}
      </ul>
    </>
  )
}
