#/usr/bin/bash
echo "Checking for Python 3.4"
if [ "$(python3 --version)" = "Python 3.4.3" ]; then
	echo "Python version satisfied."
else
	echo "Installing Python 3.4"
	sudo apt-get install python3
fi
echo "Checking for pip"
if [ "$( which pip | grep "no pip in" )" = 0 ]
then
	echo "Pip installation satisfied."
else
	echo "installing pip"
	sudo apt-get install python3-pip
fi

echo "Creating virtualenv monospace"
sudo pip install virtualenvwrapper
echo "export WORKON_HOME=$HOME/.virtualenvs" >> $HOME/.bashrc
echo "export PROJECT_HOME=$HOME/Devel" >> $HOME/.bashrc
if [ ! -f /usr/local/bin/virtualenvwrapper.sh ]
then	
	echo "source /usr/bin/virtualenvwrapper.sh" >> $HOME/.bashrc
else
	echo "source /usr/local/bin/virtualenvwrapper.sh" >> $HOME/.bashrc
fi
source $HOME/.bashrc
mkvirtualenv monospace
workon monospace
echo "Complete"

echo "Installing Python dependencies"
pip install -r requirements.txt
echo "Complete"

echo "Installing database."
sudo apt-get install mariadb
echo "Complete"



while true; do
    read -p "Do you wish to start services now? [y/n]" yn
    case $yn in
        [Yy]* ) ./start.sh; break;;
        [Nn]* ) exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
