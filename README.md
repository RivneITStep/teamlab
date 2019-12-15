# TeamLab Project 

TeamLab is a web platform for ITStep Academy students who want to take part in the de
velopment of team projects and gain real-project experience.

Such projects are very useful as they allow to develop project from the very beginning u
sing Scrum (Agile framework) that helps teams work together
___

#### Authorization and authentication:
JWT strategy
___
#### Roles of users in SPA

|NAME           | DESC              | 
| ------------- |:------------------| 
| Admin         | Full rights (CRUD for everything)    | 
| Moderator     | CRUD for posts and comments | 
| User          | CRUD for own comments         |
___
#### Schemas for save to the Mongo DB
___
|Schema name   | Fileds(Details)            | 
| -------------|:------------------         | 
| comment      | Author,  postId,  comment,  commentDate    | 
| like         | Item,  author,  created | 
| post         | Author, title, text, comments, likes, views, date        |
|profile       |user_id, location, skills, githubusername, experience, education, social, mainimage, date|
|project       |Author, title,slug, image, stage, date|
|user          |Name, email, password, role, date|
___

BakcEnd documentation link:
