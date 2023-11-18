# React-BMX-Project

Bike managment platform

Server - in server dir - node server.js
App start - in app dir - npm run dev

## Routes

    HOST - [http://localhost:](http://localhost:3030)

    Home page fetch request - [http:/HOST + /jsonstore/indexPage](http://localhost:3030/jsonstore/indexPage)

- Frames load all available frames in DB - http://localhost:3030/jsonstore/frames

- Wheels loaded depending on frame model -
  -- criteria = 'type[frame.type]'
  --http://localhost:3030/data/wheels?where=type%20LIKE%20%22${criteria}%22
