echo "Installing Python 3.4"
has_python34 = $(python3 --version)
if [[ "$has_python34" == "Python 3.4.3"]]
then 
	echo "Python version satisfied."
else
	echo "Installing Python 3.4"
	sudo apt-get install python3
fi
echo "Installing pip"
if [[ $( which pip | grep "no pip in" ) == 0 ]]
then
	echo "Pip installation satisfied."
else
	echo "installing pip"
	sudo apt-get install python3-pip
fi

echo "Installing Python dependencies"
pip install -r requirements.txt
echo "Complete"

echo "Installing database."
sudo apt-get install mariadb
echo "Complete"

while true; do
    read -p "Do you wish to start services now?" yn
    case $yn in
        [Yy]* ) ./start.sh; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
