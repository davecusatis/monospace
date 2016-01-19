echo "Starting database service"
sudo service mariadb start
echo "Complete"

echo "Starting monospace server"
workon monospace
python manage.py runserver
echo "Complete"
