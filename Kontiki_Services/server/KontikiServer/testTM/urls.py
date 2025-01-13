from django.urls import path
from .views import EntretienTMListCreate, EntretienTMDetail


urlpatterns = [
    path('api/entretien/', EntretienTMListCreate.as_view(), name='entretien_tm_list_create'),
    path('api/entretien/<int:pk>/', EntretienTMDetail.as_view(), name='entretien_tm_detail'),
]
