# **Gallery-cypress**

Using Cypress for creating automation test case for  [Gallery-app](https://gallery-app.vivifyideas.com/login) 

the Locators method was used for testing. The tests consist of:

* register.spec.js
* login.spec.js
* createGallery.spec.js
* myGalleries.spec.js
* logout.spec.js



### **Instalation and Instruction**

You can use the Visual Studio Code or any other similar program

[Visual Studio Code](https://code.visualstudio.com/download) (instalation in link)


in addition to it, it is necessary to install  cypress

[Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements) (instalation in link)

after that, it needs to be set environment. Use terminal(for linux) or  [Git Bash](https://git-scm.com/downloads) (for windows)

Make new folder with fucntion mkdir (desire name)
with cd comand go in that folder and type
 
 ```
npm init
```
then
```
npm install cypress --save-dev
```

Command for open cypress is:
```
node_modules/.bin/cypress open
```
