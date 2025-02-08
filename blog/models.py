from django.db import models

def user_directory_path(instance, filename):
    return f"blog/media/articleImages/{filename}"

# Create your models here.
class SingleArticle(models.Model):
    # The title shouldn't really be more than 100 characters long
    title = models.CharField(max_length=100, null=True)
    publish_date = models.DateTimeField()
    content = models.TextField(null=True)
    article_image = models.ImageField(upload_to=user_directory_path, null=True)
    image_summary = models.CharField(max_length=50, null=True)
    image_credit = models.CharField(max_length=200, null=True)
    summary = models.TextField(null=True)