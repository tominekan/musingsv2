# Generated by Django 5.1.6 on 2025-02-08 06:01

from django.db import migrations, models
import uuid

class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20250208_0601'),
    ]

    operations = [
        migrations.AlterField(
            model_name='singlearticle',
            name='articleID',
            field=models.UUIDField(default=uuid.uuid4, editable=False, unique=True, serialize=False),
        ),
    ]
