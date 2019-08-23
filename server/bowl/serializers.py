from rest_framework import serializers
from .models import Bowl


class BowlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bowl
        fields = ['name', 'description', 'image', 'user', 'post_date']
        