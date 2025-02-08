from django.db import models
import uuid

def user_directory_path(instance, filename):
    return f"/media/articleImages/{filename}"

# Create your models here.
class SingleArticle(models.Model):
    # The title shouldn't really be more than 100 characters long
    title = models.CharField(max_length=100, null=True)
    publish_date = models.DateTimeField()
    content = models.TextField(null=True)
    
    # Images should probably not be necessary, not 100% sure though
    article_image = models.ImageField(upload_to="articleImages", null=True)
    image_summary = models.CharField(max_length=50, null=True)
    image_credit = models.CharField(max_length=200, null=True)

    summary = models.TextField(null=True)
    articleID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False)