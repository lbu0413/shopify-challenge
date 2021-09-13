# Shopify Frontend Developer Intern Challenge <img src="https://user-images.githubusercontent.com/66400448/133150346-26ea47bf-bbba-4477-9d1b-25c96c3359c5.png" alt="shopify-icon" width="40" />





## Live Demo
[Live demo link](https://lucid-aryabhata-a0f2f8.netlify.app)


## The Challenge
Create a webpage that can pull images, and allow the user to "like" and "unlike" their favourite images.

### Technical requirements 
* Search results should come from NASA's free APIs, for which you'll need a free API key from https://api.nasa.gov
  *  You are free to use any NASA API you like
  *  You are free to use any frontend framework/component libarary you like(or none at all)
* Each image result should list at least a title, date of capture (ideally in earth_date) and a button to "like" that image
* Each image can be "liked", and a user should be able to undo their "like"
* The HTML that ends up being served client-side should be accessbile and semantic  


## Install 
* Clone this repo using [Git](https://git-scm.com/) or download the [zip](https://github.com/lbu0413/shopify-challenge/archive/refs/heads/main.zip)
```bash
git clone https://github.com/lbu0413/shopify-challenge.git
``` 
* Go to the root folder of the project and  **npm** command to install all the dependencies
```bash
npm install
```
* Run the project on localhost:3000
```bash
npm start
```
## My Approach
* I wanted to make a simple application that not only covers all the required functionalities but also gives users an impression of clean and simple User Interface of web application.
* I tried best to organize directories and files of the project and write codes with modern ES6 syntax.

* Each image can be liked and "unliked" and save likes if the user leaves or reloads the page using localStorage.
* Save each "date" as the key and "likeData" object as the value
![image](https://user-images.githubusercontent.com/66400448/133149275-92ce9464-6eee-49d6-98d2-d408fd0258f0.png)



## Tech Stacks
* [React.js](https://reactjs.org), using [create-react-app](https://facebook.github.io/create-react-app)
* [Axios](https://github.com/axios/axios)
* [Styled Components](https://styled-components.com/)
* [React Datepicker](https://reactdatepicker.com/)
* [Font Awesome](https://fontawesome.com/)
* [React Spinners](https://www.npmjs.com/package/react-spinners)

