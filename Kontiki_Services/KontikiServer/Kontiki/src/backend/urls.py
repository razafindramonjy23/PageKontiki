from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', include('contact.urls')),
    path('api/', include('testDEV.urls')),
    path('api/', include('testTM.urls')),
    path("api/", include('testAM.urls'))
]
