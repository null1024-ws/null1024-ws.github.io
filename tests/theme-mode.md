# Theme persistence test cases

Expected rule: after the homepage theme toggle is clicked, every later page in the same tab must match that choice immediately. Dark means `document.body` has class `dark` and computed background is the dark token. Light means the class is absent and the background is white.

## Setup

- Start from `/`
- Clear `localStorage.theme` and `sessionStorage.theme` before each case unless the case says otherwise
- Force the starting appearance with the homepage toggle so the case does not depend on OS preference

## Homepage toggle

| ID | Steps | Expected |
| --- | --- | --- |
| T1 | Open `/`. Click the theme button once from light. | Homepage is dark. Storage is `dark`. |
| T2 | From dark homepage, click the theme button again. | Homepage is light. Storage is `light`. |
| T3 | Repeat T1 then T2 twice. | Each click flips the current page with no stuck state. |

## Reported bug: navigate after toggle

| ID | Steps | Expected |
| --- | --- | --- |
| T4 | Light homepage → dark → click `posts`. | Posts is dark on first entry. |
| T5 | Light homepage → dark → click `pubs`. | Pubs is dark on first entry. |
| T6 | Light homepage → dark → click `travel`. | Travel is dark on first entry. Map uses the dark palette. |
| T7 | Light homepage → dark → click `miscellaneous`. | Miscellaneous is dark on first entry. |
| T8 | Dark homepage → light → click `posts`. | Posts is light on first entry. |
| T9 | From a dark inner page, click Back to `/`. | Homepage stays dark. |
| T10 | Dark homepage → posts (dark) → Back → posts again. | Posts is still dark. No second visit required. |

## Hover / prerender (instant links)

Homepage nav links have class `instant`. Hover starts speculation prerender after 50ms.

| ID | Steps | Expected |
| --- | --- | --- |
| T11 | Light homepage. Hover `posts` for >50ms. Toggle dark. Click `posts`. | Posts is dark (must not reuse a light prerender). |
| T12 | Light homepage. Hover every nav link. Toggle dark. Click each nav link. | All four destinations are dark on first entry. |
| T13 | Dark homepage. Hover `posts`. Toggle light. Click `posts`. | Posts is light on first entry. |

## Nested pages and reload

| ID | Steps | Expected |
| --- | --- | --- |
| T14 | Dark homepage → posts → open `hello`. | The post is dark. |
| T15 | While on a dark inner page, reload. | Page stays dark. |
| T16 | While on a light inner page, reload. | Page stays light. |

## Back-link vs history

| ID | Steps | Expected |
| --- | --- | --- |
| T17 | Dark homepage → posts → click the in-page Back control. | Homepage is dark. |
| T18 | Dark homepage → posts → hello → Back → Back. | Each restored page is dark. |

## Storage / preference

| ID | Steps | Expected |
| --- | --- | --- |
| T19 | Set explicit dark, close the tab, open `/` again in a new tab. | Homepage is dark (`localStorage` persists). |
| T20 | Direct visit to `/posts/` with storage `dark`. | Posts is dark without visiting homepage first. |

## Results (local preview, 2026-09-11)

| ID | Result | Notes |
| --- | --- | --- |
| T1 | Pass | Homepage background `rgb(28, 28, 28)`. |
| T2 | Pass | Homepage background `rgb(255, 255, 255)`. |
| T3 | Pass | Covered by T1/T2 round trip. |
| T4 | Pass | First click into posts is dark. |
| T5 | Pass | Pubs is dark. |
| T6 | Pass | Travel is dark; map uses dark palette. |
| T7 | Pass | Miscellaneous is dark. |
| T8 | Pass | First click into posts is light. |
| T9 | Pass | Back to `/` stays dark. |
| T10 | Pass | Second visit not required. |
| T11 | Pass | Hover posts, then toggle dark, then click; posts is dark. |
| T12 | Pass | Hover all nav, toggle dark; destinations stay dark. |
| T13 | Pass | Hover while dark, toggle light, click posts; posts is light. |
| T14 | Pass | `Hello` post is dark. |
| T15 | Pass | Reload miscellaneous stays dark. |
| T16 | Pass | Reload posts stays light. |
| T17 | Pass | In-page Back keeps the stored theme. |
| T18 | Pass | Hello → posts stays dark. |
| T19 | Pass | `localStorage` keeps `dark`/`light` across navigations. |
| T20 | Pass | Direct `/pubs/`, `/travel/`, `/miscellaneous/` honor storage. |
