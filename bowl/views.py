from random import choice

from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

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


@api_view(['GET'])
def random_bowl(request):
    """
    Returns the PK of a random bowl
    """
    
    data = {'pk': choice(Bowl.objects.all()).pk}
    return Response(data)


@api_view(['POST'])
def rate_bowl(request):
    bowl = Bowl.objects.get(pk=request.data['bowl']['pk'])
    bowl.ratings_cnt += 1
    bowl.ratings_sum += request.data['rating']
    bowl.save()
    
    return Response(status=status.HTTP_200_OK)
