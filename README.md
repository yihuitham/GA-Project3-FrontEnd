# GA Project 3 - MERN Stack

## Hospital Management Application

**Website: [Hospital Management](https://hospital-management-fe.herokuapp.com/)**

**Team members:**

- [Peng Kien Wei](https://github.com/kienwei96)
- [Tham Yi Hui](https://github.com/yihuitham)

## Description

**Hospital Management** provides hospitals a platform to:

- schedule operations
- assign surgeons and nurses
- allow staffs(surgeons, nurses) to view their day to day assignments
- keep a record of operations, staffs, patients, post operation report

## Preview

This is the login page
![Login Page](./public/login-page.png)

Chief surgeons, also known as supercreators, have full CRUD capabilities that allows them to create/read/update/delete schedules, patients and staffs.
![Schedule Page](./public/chief-schedule-page.png)
![Patient List Page](./public/chief-patients-page.png)

Staffs can only view operations assigned to them and update post operation reports
![Assignment Page1](./public/surgeon-page.png)

## User Stories

Click on this [link] (https://github.com/yihuitham/GA-Project3-FrontEnd/blob/main/public/GA_Project3%20-%20User%20stories.docx)

## Database/Storage

- **MongoDB**, a NoSQL databased used for high volume data storage

## Technologies

### Frontend

- **axios**, a promised-based HTTP client for node.js and the browser.
- **react**, a Javascript library for building user interfaces.
- **material-ui**, a library that allows us to import and use different components to create a userinterface in React Applications.
- **formik**, open source library for React, used as form helper for validation.
- **date-fns**, a modern JavaScript date utility library.

### Backend

The backend files can be found in this [repository](https://github.com/yihuitham/GA-Project3-BackEnd)

- **bcrypt** is used to hash and store passwords in database.
- **cors** provides a Connect/Express middleware that can be used to enable CORS with various options.
- **express-jwt** provides Express middleware for validating JWTs (JSON Web Tokens) through the jsonwebtoken module.
- **jsonwebtoken** is a compact, URL-safe means of representing claims to be transferred between two parties.
- **jwt-decode** is a small browser library that helps decoding the encoded JWTs token.
- **mongoose** provides a straight-forward, schema-based solution to model the application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

## Accomplishment

- Authentication and authorization implemented using JWT and headers
- Full CRUD control over patient, staff and operation data for Chief(admin) user.
- Staff able to view operation data and edit report

## General Approach to Challenges

- Break down a function into a very simple function (i.e. logging out a string on the console) and incrementally build towards the main function.

## Unsolved Problems

- Display marks on staff's calender to indicate the dates where he/she is assigned an operation
- Prevent double booking of staffs on the same date and time

## Stretch Goals

- Chat feature that would allow communication within the operation team
- To breakdown operation schedules in terms of timeslots

## Attributions

[https://flat-icons.com](https://flat-icons.com)

[https://storyset.com](https://storyset.com/team)
