from django.urls import path, include
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from .views import BowlViewSet, current_user, UserList, BowlDetailView, random_bowl, rate_bowl

router = routers.DefaultRouter()
router.register('', BowlViewSet)

urlpatterns = [
    path('token_auth/', obtain_jwt_token),
    path('bowls/', include(router.urls)),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('bowl/<int:pk>', BowlDetailView.as_view()),
    path('random_bowl/', random_bowl),
    path('rate_bowl/', rate_bowl),
]