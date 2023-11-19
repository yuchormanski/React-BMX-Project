# React-BMX-Project

Bike management platform

Server - in server dir - node server.js
App start - in app dir - npm run dev

## Routes

    HOST URL is in environment.js file

    - All other route endpoints are in path.js file

- Home page fetch request - [HOST/jsonstore/indexPage](http://localhost:3030/jsonstore/indexPage)
- Data for index page should be changed according to project deployment service

### Create page

- On page load get the all available frames from DB - [HOST/data/frames](http://localhost:3030/data/frames)
- On selected frame is made new request to [HOST/data/frames/:selected_frame_id](http://localhost:3030/data/frames/:ids)

##### Wheels selection is available after frame selection

- Wheels selection depends on frame model -
  - criteria = 'type[frame.type]'
  - [HOST/data/wheels?where=type=criteria](http://localhost:3030/data/wheels?where=type%20LIKE%20%22${criteria}%22)

##### Parts selection is available after selecting wheel

- Parts selection depends on wheel model -
  - criteria = 'wheelBase[wheelBase]'
  - [HOST/data/parts?where=type=criteria](http://localhost:3030/data/wheels?where=type%20LIKE%20%22${criteria}%22)
