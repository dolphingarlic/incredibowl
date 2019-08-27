from random import choice

from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import BowlSerializer, UserSerializer, UserSerializerWithToken
from .models import Bowl


@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BowlViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows bowls to be viewed or edited.
    """
    queryset = Bowl.objects.all()
    serializer_class = BowlSerializer


class BowlDetailView(generics.RetrieveAPIView):
    """
    API endpoint that returns details about a specific bowl
    """
    serializer_class = BowlSerializer
    queryset = Bowl.objects.all()
