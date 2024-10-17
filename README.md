# Whats App Clone with React and Firebase

## stack used

- React and Material UI
- React context API
- Firebase Firestore
- Google Auth in Firebase
- Random avatar- Dicebar API used
  
  https://www.dicebear.com/introduction/
  https://www.dicebear.com/how-to-use/http-api/
  https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}

npm i @material-ui/core
npm i @material-ui/icons
npm i firebase-tool

### More about Firestore

* Cloud Firestore is flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.
* Cloud Firestore is a NoSQL, document-oriented database.
* Data is stored in documents, which are organized into collections. Each document contains a set of key-value pairs.
* All documents must be stored in collections. Documents can contain subcollections and nested objects, both of which can include primitive fields like strings or complex objects like lists.
* In Cloud Firestore, the unit of storage is the document. A document is a lightweight record that contains fields, which map to values. Each document is identified by a name.

## Screenshots
<img width="1290" alt="Screenshot 2024-10-17 at 9 19 55 PM" src="https://github.com/user-attachments/assets/8f7ef132-18e7-44e1-b3d6-4ffa9cc3d953">

<img width="1387" alt="Screenshot 2024-10-17 at 9 22 48 PM" src="https://github.com/user-attachments/assets/e132bb8d-eaa5-4878-be96-d29898ae77f1">


### Erros-

1. Module not found: Error: Package path . is not exported from package /Users/madhurapunde/Desktop/Edu/Deploy/whats-app-clone/node_modules/firebase (see exports field in /Users/madhurapunde/Desktop/Edu/Deploy/whats-app-clone/node_modules/firebase/package.json

had not imported app and store

2)Firebase: Need to provide options, when not being deployed to hosting via source. (app/no-options).
FirebaseError: Firebase: Need to provide options, when not being deployed to hosting via source. (app/no-options).

3) Data layer was not working which was close replacement to redux-
   Few pieces were missing and imports were not right as I was directly importing from firebase and not the setup file which is internally used in project.
