from random import choice
from rest_framework import viewsets, generics
from .serializers import BowlSerializer
from .models import Bowl


class BowlViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bowls to be viewed or edited.
    """
    queryset = Bowl.objects.all()
    serializer_class = BowlSerializer


class RandomBowl(generics.ListAPIView):
    serializer_class = BowlSerializer
    
    def get_queryset(self):
        return [choice(Bowl.objects.all())]
