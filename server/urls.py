from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.cache import never_cache

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', never_cache(TemplateView.as_view(template_name='index.html'))),
    path('api/', include('bowl.urls')),
]
