# Nasa Project (ZTM)

#### To run need node.js, just type "npm run deploy" in the root folder

### how the project works

This is a full stack project, with back and front end. The course focus on build the back end part using node.js and express. 

The patter to structure the code was the MVC (Model-view-controller).

The model planets filter the data served by NASA stored in the "kepler_data.csv" file, puling only the habitable exo-planets, who can be access by the "/planets" end point.

You can send exploration mission to this habitable planets following the launches model. The launches can be access by the "/launches" end point using the GET method, send exploration using the POST method and abort missions using the DELETE method.