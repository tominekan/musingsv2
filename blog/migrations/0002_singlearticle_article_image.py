# Generated by Django 5.1.6 on 2025-02-08 04:42

import blog.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='singlearticle',
            name='article_image',
            field=models.ImageField(null=True, upload_to=blog.models.user_directory_path),
        ),
    ]
