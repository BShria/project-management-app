# project-management-app

This is a web application that lets us create, read, update and delete projects
<br>
Technologies used:<br>
Database - MongoDB<br>
API - Node.js<br>
Frontend - HTML5, Bootstrap5, Vanilla Javascript<br><br>


<strong>CREAT<strong>: We can add new projects to the app. 
 ```
  //The Project Schema
  const projectSchema = new mongoose.Schema({
    title: String,
    due: Date,
    priority: String,
    status: String
});
  ```
![create](https://user-images.githubusercontent.com/54706686/200006814-f925372a-b439-4cd7-9500-6d74fbfa54a2.png)
  
<br>

READ: The app reads all the documents from the Project collection and renders them in the 'Your Project' section in the frontend.
![read](https://user-images.githubusercontent.com/54706686/200004832-417700ac-944d-4be4-85f6-c940ad0fb819.png)

<br>

UPDATE: Each project card has a 'Mark as Completed' button. When the button is clicked then the status of the project changes to 'Completed'.
![update](https://user-images.githubusercontent.com/54706686/200004918-efdadb2c-39ef-453b-9393-a547a7edb614.png)
  
<br>
  
DELETE: Each project has a delete button for deleting that projct from the database.
![delete](https://user-images.githubusercontent.com/54706686/200004966-ebae8780-5e3b-4056-b16b-05612c3c74f8.png)
  
