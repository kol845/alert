# API Documentation

## /api/user

* **get** returns a user
  
* **put** update a user

## /api/login

* **get** login attempt
  * *request* : (uname, passwd)
  * *response* : (status, uname, jwt) 


# Structure

* **status** 0, 1, 2 for unhandled, accepted, rejected
* **JWT** the payload in the JWT is: (uid,uname,exp)
  
# Examples

* **login accepted**
  * **request**:{uname: *'pebo'*, passwd: *'admin'*}
  * **response**:{status: *1*, uname: *'pebo'*, jwt: *'AiOiJKV1QiLCJhbG...'*} 

* **login rejected**
  * **request**:{uname: *'pebo'*, passwd: *'1234'*}
  * **response**:{status: *2*, error: {code: *'LOGIN_ERROR'*, message: *'The username or password was not correct!'*}} 