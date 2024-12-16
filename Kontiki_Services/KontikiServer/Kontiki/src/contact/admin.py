from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContatAdmin(admin.ModelAdmin): 
    list_display = ('nom', 'prenom', 'email', 'message')
    search_fields = ('nom', 'prenom', 'email')
