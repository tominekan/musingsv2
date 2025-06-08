# Migrate DB for Usefulness
python manage.py migrate

# Make use of the custom bootstrap
mkdir custom_bootstrap
cd custom_bootstrap
npm init -y
npm install bootstrap@5.3.6

npm install -g sass
sass ./scss/custom.scss ./css/custom.css