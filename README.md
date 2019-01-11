# Simple Chat app

## How to run the app

* Unzip folder or clone the repository

### Docker
``` bash
# in docker bash
$ cd <project dir>
$ docker build . 

# get docker latest image id normally appear at the top of the list
$ cocker images

#once get images id
$ docker run -d -p 3000:3000 <image-id>

#Navigate to "http://localhost:3000"

#in case "http://localhost:3000" does not work, get ip of you virtualbox
$ docker-machine ls  

#the virtualbox ip will appear something like "tcp://192.168.99.100:2376"
#navigate to 192.168.99.100:3000


```
## Or
### Locally
``` bash

# install dependencies locally
$ npm install

# build for production and launch server
$ npm run build
$ npm start

# Navigate to "http://localhost:3000"
```


## What I use in this project 

##### introduction 

All technology is use here base on my previous experience and when I do training all junior developer. The project will focus on the tech which is well documented and structure. To avoid a lot of confusion and control all dev to work in the same direction. 

##### js - [nuxt.js](https://nuxtjs.org/)
Nuxt js is a framework build for vue.js where they are nice folder directory structure and flexible so it make powerful app more simply. 
 
##### css - [tailwind](https://tailwindcss.com/docs/what-is-tailwind/) 

Tailwind is utility base css and components friendly. Compare to bootstrap when creating apps, Tailwind make styling development a lot faster and without creating more duplication of custom styles as it is utility base. good for complex user interface and faster when we do debugging. Also it allow us to build unique interface without bootstrap like page.

##### database - [firebase](https://firebase.google.com/)      

Firebase is real time NoSQL cloud database. Data is stored as JSON. I use in this app for how simple of the app and there is no database relationship needed.


##Testing  

##### [cypress](https://www.cypress.io/)

cypress is very easy to setup and can replace mocha and chai so we install only one time. It has clear user interface when the test run and make a snapshot and record for the test.

```bash
$ npm run test

# once the interface appear click in integration/interface.spec.js 
```

> Testing now following (BDD) normally comes from user requirement and business wise. In this project is very simple now base on behaviour the app does at the moment.  

## What I can improve

- component transition to create better user experience.
- In the chat box once scroll up to the top. scroll down button  appear so when the user click on. The chat box will scroll down to bottom to see the latest comment.
- validation on name input and comment input. e.g. they can not be empty if so uer not allow to click on send or submit button. 


