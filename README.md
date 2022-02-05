# Node JS Discord ChatBot

First of all we have to create a discord bot.For creating the bot go to https://discord.com/developers 
and create or sign up with the developer account.

Create a New Application 


![Screenshot 2022-02-05 at 7 24 21 PM](https://user-images.githubusercontent.com/57206070/152645750-e3cf2ffd-3dcf-4857-af66-d65fc16c7cbe.png)

Then fill up all the details of the app (name etc).
Click on the bot tab and add a new bot

![Screenshot 2022-02-05 at 7 34 11 PM](https://user-images.githubusercontent.com/57206070/152646240-d0f3788f-7cef-457d-9b8a-18f1c8494763.png)

Now you will see a bot in bot tab section. Click on copy to copy the token which is used in node application.

![Screenshot 2022-02-05 at 7 37 57 PM](https://user-images.githubusercontent.com/57206070/152646345-501749c5-e6a1-4cc6-9d23-e263861b31c0.png)

# Install bot to the server 

Click on Oauth and then URL Generator Click on the bot and adminsitrator 

![Screenshot 2022-02-05 at 7 40 36 PM](https://user-images.githubusercontent.com/57206070/152646514-50ec8705-4920-4e59-8ddf-b182059760b1.png)

Now a url will be generated at the bottom.copy this url on new tab and you will see a page and then select your own created server and Authorize it.

# Create a node js server

Clone the code from this repo and add a .env file and put CLIENT_TOKEN='your token here' in it.

Run Command in termianl (node server.js)

Now you can test it message !hi and bot will reply 

![Screenshot 2022-02-05 at 7 50 20 PM](https://user-images.githubusercontent.com/57206070/152647030-d408e12a-058e-4cba-a707-bf77f67956df.png)



