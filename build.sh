# Exit on error
set -o errexit

# Install requirements.txt (I think I collected it)
pip install -r requirements.txt

# Collect the static files
python manage.py collectstatic --no-input
# Migrate DB for Usefulness
python manage.py migrate

# Make use of the custom bootstrap
mkdir blog/static/custom_bootstrap
cd blog/static/custom_bootstrap
npm init -y
npm install bootstrap@5.3.6

npm install -g sass
sass ./scss/custom.scss ./css/custom.css