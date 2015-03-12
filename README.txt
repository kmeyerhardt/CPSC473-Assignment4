Assignment 4

Project: Question/Answer
Our project is to build a site where users can post questions or answers to questions posted by other users. The questions have a lifespan after which they should expire from the site. We are aiming towards IT-related questions that provide quick answer feedback while a problem is current.

Useful API’s:

Quetter: http://quetter.com/api.html
Quetter has methods for returning questions by genre, showing a list of genre’s, recent posts, individual questions, or questions by user. Implementing a genre list could be useful to partition the total question database, while showing recent posts could be used to track the lifespan of an individual question.

Stack Overflow: https://api.stackexchange.com/docs
Stack Overflow has methods to retrieve all answers on a site, answers identified by a set of ids, vote handling, delete/edit answers, show recent events, get all posts, posts by id, and many more for questions. Voting could be used to keep a question live as long as it has had a vote (or some other activity) within the expiration timeframe, instead of requiring an answer and then deleting or hiding the question after the time interval. This way a question (and answer) could stay live for a longer period if it helps more users.

These seemed the best fit for the project we have to do. Most of the other APIs available were more about surveys than Q&A functionality.


Sample Implementation: Quetter http://quetter.com/api.html
I attempted to use Quetter’s API to display a list of genres from the Q&A page. The genres would simply be displayed as an unordered list. I chose to implement Quetter because it doesn’t require app registration (like Stack Overflow does).

However, even though the ajax request returns the data:
[{"key":"bot","name":"Question Bot"},{"key":"business","name":"Business"},{"key":"computer","name":"Computer"},{"key":"electronics","name":"Electronics"},{"key":"fashion","name":"Fashion"},{"key":"foods","name":"Foods"},{"key":"free","name":"Free Topics"},{"key":"health","name":"Health, Beaulty"},{"key":"hobby","name":"Hobby"},{"key":"internet","name":"Internet"},{"key":"jobs","name":"Jobs"},{"key":"life","name":"Life Style, DIY"},{"key":"love","name":"Love"},{"key":"news","name":"News"},{"key":"parenting","name":"Parenting"},{"key":"pets","name":"Pets"},{"key":"quetter","name":"Quetter"},{"key":"reference","name":"Reference"},{"key":"relationship","name":"Relationship"},{"key":"science","name":"Science"},{"key":"sports","name":"Sports"},{"key":"study","name":"Study"},{"key":"travel","name":"Travel, Local"},{"key":"twitter","name":"Twitter"}]

After doing much research the problem is that even though the API states the site has jsonp service, it does not seem to. When we set up the server ourselves we can set the “Content-Type” header to “text/javascript” which should resolve the issue.

This API doesn’t have as much functionality as Stack Overflow, so if we decide to use it we will have to write the rest of the functionality ourselves.

This very brief example (if it had worked) could be expanded to search for specific genres, or questions of a specific genre could be displayed (with options to answer or post new questions). Posting new questions is not part of the API, but it does have methods to display all questions of a particular genre.