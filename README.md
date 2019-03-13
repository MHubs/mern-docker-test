# Mern Test

### Note:
* I still haven't been able to completely dockerize it yet (mongo won't work)

## How to install / get up and running

* Download the project and save it to a folder
* Open up the terminal/command prompt
* type 'cd (folder)'
  * Make sure (folder) is the directory you saved everything to
* type 'ls' to list the files and make sure 'src' and 'node_modules' are listed
* type 'npm start' to start
* Open a web browser and go to 'localhost:3000' to view

## How to see if mongo is working

* On the webpage, fill out the form and press submit
* If those credentials appear in the table above it, then you're good

## Okay so mongo isn't working

* Close the terminal you're in if the webpage is still running
* Go into a new terminal/command prompt
* type 'sudo mongod' to start a mongo instance
  * The sudo is actually important here
* Go to another new terminal and cd to the folder and type 'npm start'

# To use docker
### I haven't figured out how to make mongo work in docker yet but everything else should work
* Close out of any instances that the webpage is currently running on
* Open terminal and cd to the folder
* type 'docker-compose up --build'
  * This will build the project and then docker will run it
  * Highly possible this will not work at all
