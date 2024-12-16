from django.urls import path, include
from .views import get_contacts, create_contacts, contact_detail



# router = DefaultRouter() 
# router.register(r'contacts', ContactViewSet)

urlpatterns = [ 
    path('contacts/', get_contacts, name='get_contacts'),
    path('contacts/create/', create_contacts, name='create_contacts'),
    path('contacts/<int:pk>', contact_detail, name='contact_detail'),
]