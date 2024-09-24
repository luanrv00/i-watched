### when searching
- GET api/shows/search
  - https://api.themoviedb.org/3/search/multi

#### clicking on "add" button adds the item to added list
- POST api/shows/watched_items

### added movies
- GET api/shows/watched_items
- GET https://api.themoviedb.org/3/movie/{movie_id}

### added animes
- GET api/shows/watched_items
- GET https://api.themoviedb.org/3/tv/{series_id}

### added tv series
- GET api/shows/watched_items
- GET https://api.themoviedb.org/3/tv/{series_id}

## added anime page
- GET https://api.themoviedb.org/3/tv/{series_id}

### episodes list
- GET https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}
- GET api/shows/watched_episodes

#### clicking on "watched" button adds the item to wacthed episodes
- POST api/shows/watched_episodes

## added tv series page
- GET https://api.themoviedb.org/3/tv/{series_id}

### episodes list
- GET https://api.themoviedb.org/3/tv/{series_id}/season/{season_number}
- GET api/shows/watched_episodes

#### clicking on "watched" button adds the item to wacthed episodes
- POST api/shows/watched_episodes
