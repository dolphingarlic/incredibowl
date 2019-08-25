from django.db import models
from django.contrib.auth.models import User


class Bowl(models.Model):
    name = models.CharField(max_length=50)
    style = models.CharField(max_length=50, default="Classic")
    description = models.TextField()
    
    image = models.URLField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_date = models.DateField(auto_now=True)
    
    ratings_cnt = models.IntegerField(default=0)
    ratings_sum = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name