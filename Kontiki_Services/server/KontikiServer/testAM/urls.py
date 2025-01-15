from django.urls import path
from .views import EntretienAMListCreate, EntretienAMDetail


urlpatterns = [
    path('api/entretien/', EntretienAMListCreate.as_view(), name='entretien_am_list_create'),
    path('api/entretien/<int:pk>/', EntretienAMDetail.as_view(), name='entretien_am_detail'),
]
