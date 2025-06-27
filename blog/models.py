from django.db import models
import uuid

# Create your models here.
class SingleArticle(models.Model):
    # The title shouldn't really be more than 100 characters long
    title = models.CharField(max_length=100, null=True)
    publish_date = models.DateTimeField()
    content = models.TextField(null=True)

    summary = models.TextField(null=True)
    articleID = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False)