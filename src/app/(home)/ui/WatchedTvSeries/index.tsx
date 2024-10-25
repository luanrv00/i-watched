import type { WatchItemType } from "@/app/types/types";
import { WatchedItemsList } from "..";

export function WatchedTvSeries({watchedItems}: {watchedItems: WatchItemType[]}) {
  return (
    <>
      <h2>Watched TV Series</h2>
      <WatchedItemsList watchedItems={watchedItems}/>
      {!watchedItems.length && <p>Add watched TV Series</p>}
    </>
  )
}
