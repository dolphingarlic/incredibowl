from rest_framework import viewsets
from .serializers import BowlSerializer
from .models import Bowl


class BowlViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bowls to be viewed or edited.
    """
    queryset = Bowl.objects.all()
    serializer_class = BowlSerializer
