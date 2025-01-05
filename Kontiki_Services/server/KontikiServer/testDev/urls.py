from django.urls import path
from .views import EntretienDevListCreate, EntretienDevDetail

urlpatterns = [
    path('api/entretien/', EntretienDevListCreate.as_view(), name='entretien_dev_list_create'),
    path('api/entretien/<int:pk>/', EntretienDevDetail.as_view(), name='entretien_dev_detail'),
]