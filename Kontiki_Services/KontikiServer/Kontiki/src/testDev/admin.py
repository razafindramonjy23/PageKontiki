from django.contrib import admin
from .models import Formulaire

class FormulaireAdmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'adresse_email') 
    search_fields = ('nom', 'prenom', 'adresse_email')  

admin.site.register(Formulaire, FormulaireAdmin)
