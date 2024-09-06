### when searching
- https://api.themoviedb.org/3/search/multi

#### clicking on "add" button adds the item to added list
- POST api/watched_items

### added movies
- GET api/watched_items
- https://api.themoviedb.org/3/movie/{movie_id}

### added animes
- GET api/watched_items
- https://api.themoviedb.org/3/tv/{series_id}

### added tv series
- GET api/watched_items
- https://api.themoviedb.org/3/tv/{series_id}

## added anime page
- https://api.themoviedb.org/3/tv/{series_id}

### episodes list
- https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}
- GET api/watched_episodes

## added tv series page
- https://api.themoviedb.org/3/tv/{series_id}

### episodes list
- https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}
- GET api/watched_episodes
