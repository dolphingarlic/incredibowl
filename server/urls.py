from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache

from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token

from bowl import views

router = routers.DefaultRouter()
router.register('', views.BowlViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', never_cache(TemplateView.as_view(template_name='index.html'))),
    
    path('token_auth/', obtain_jwt_token),
    path('bowls/', include(router.urls)),
    path('current_user/', views.current_user),
    path('users/', views.UserList.as_view(), name='users'),
    path('bowl/<int:pk>', views.BowlDetailView.as_view()),
    path('random_bowl/', views.random_bowl),
    path('rate_bowl/', views.rate_bowl),
]
