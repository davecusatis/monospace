# monospace
a dotstarmoney game 
# installation
1. install python 3.4, installed by default on ubuntu 14.04+ 
2. install virtualenvwrapper, make python virtual environment - ```(sudo) pip install virtualenvwrapper; mkvirtualenv monospace; workon monospace```
3. install and start database of your choosing - ```sudo apt-get install mariadb; service mariadb start```. Then create mariadb user, set a password, host and post. This is an exercise for the user to figure out.
4. Set the user, password, etc, as the following environment vars: ```DB_USR``` ```DB_PASSWD``` ```DB_HOST``` ```DB_PORT```. Finally, create the table ```monospace_editor``` in mysql.
5. install dependencies - ```pip install -r requirements.txt```
6. start server - ```python manage.py runserver```
7. open browser at 127.0.0.1:8000

coming soon ;)
```sudo ./install.sh```
