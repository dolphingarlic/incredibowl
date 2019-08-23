from django.db import models


class Bowl(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    
    image = models.URLField()