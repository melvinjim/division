# javascripttesting

STEP 1:
To be able to perform a test in javascript you must first have Node.js installed on your computer, here is the link if you do not have it installed https://nodejs.org/es/download/

STEP 2:
After you have installed Node.js, in the terminal you will enter the following command **$ npm init**.

STEP 3:
After having entered the first command it will ask you to put a name enter the one you want.

STEP4:
After having entered the names you will download the jest library with the following code in the terminal **$ npm i --save-dev jest**.

STEP 5:
Before running the test, in **package.json** in the part of the script it should be as follows:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

STEP 6:
And to be able to execute the test, the following code must be done in the terminal, obviously all this within the folder to which we want the test **$ npm test**.