import type { WatchItemType } from "@/app/types/types";
import { WatchedItemsList } from "..";

export function WatchedMovies({watchedItems}: {watchedItems: WatchItemType[]}) {
  return (
    <>
      <h2>Watched Movies</h2>
      <WatchedItemsList watchedItems={watchedItems}/>
      {!watchedItems.length && <p>Add watched Movies</p>}
    </>
  )
}

