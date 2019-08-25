from rest_framework import serializers
from .models import Bowl


class BowlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bowl
        fields = ['name', 'style', 'ratings_cnt', 'ratings_sum', 'description', 'image', 'user', 'post_date']
        