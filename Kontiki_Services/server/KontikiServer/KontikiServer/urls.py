from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact.urls')),
    path('testDev/', include('testDev.urls')),
    path('testTM/', include('testTM.urls')),
    path('testAM/', include('testAM.urls')),
]
