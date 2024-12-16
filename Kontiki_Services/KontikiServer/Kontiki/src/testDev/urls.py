from django.urls import path 
from .views import FormulaireListCreate, FormulaireDetail

urlpatterns = [
    path('dev/', FormulaireListCreate.as_view(), name="formulaire-list-create"), 
    path('dev/<int:pk>/', FormulaireDetail.as_view(), name='formulaire-detail'),
]
