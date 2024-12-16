from django.urls import path
from .views import FormulaireListCreate, FormulaireDetail

urlpatterns = [
    path('tm/', FormulaireListCreate.as_view(), name='formulaire-list-create'),
    path('tm/<int:pk>/', FormulaireDetail.as_view(), name='formulaire-detail'),
]
