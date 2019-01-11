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
$docker-machine ls  

#the virtualbox ip will appear something like "tcp://192.168.99.100:2376"
#navigate to 192.168.99.100:3000

```

### Locally
``` bash

# install dependencies locally
$ npm install

# build for production and launch server
$ npm run build
$ npm start

# Navigate to "http://localhost:3000"
```

##Project 


