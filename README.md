Welcome to the repo for the client-side of my Memory App. This app was written using React. The app is designed to demonstrate CRUD actions for the database comning from the backend of the app. This app is created to be on online memory tracker for each person in your family. 

The memory app has the capability to create a profile for each of your children (including name, age, and an image.) Each child is then given the option for a list of memories that you can write for them. A delete, and edit capability has also been given to each child. 

The components that make up the app are all shown through App.js. There is a a KidList component that maps through the kid database from the API and creates cards for each of the children. The cards are created to show the information for each kid. 

Each child is given a NavLink that routes to a description show page for that individual child. There you will see all their information again, and all the memories that are in the database for them so far. This show page also has a form to document more memories for that child. There is also another Navlink that goes to an edit page for the child, so you can change their name, age, and pic. 

A NavBar is at the top of the page so that you can navigate between the KidList and the NewKid page where you are able to use the 'C' of CRUD and create a new child to add to the database. 

Feel free to check out the backend of this app as well! 

Run 'npm start' to load up the dom. 

Thanks for checking it out!