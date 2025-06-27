# Exit on error
set -o errexit

# Install requirements.txt (I think I collected it)
pip install -r requirements.txt

# Migrate DB for Usefulness
python manage.py migrate

# Make use of the custom bootstrap
cd blog/static/custom_bootstrap
npm init -y
npm install bootstrap@5.3.6

npm install -g sass
npm run buildcss

# Bro I'm tryna see what's wrong lol
echo "Trying to visualize folder structure"
cd ../../..
python tree.py
python manage.py collectstatic