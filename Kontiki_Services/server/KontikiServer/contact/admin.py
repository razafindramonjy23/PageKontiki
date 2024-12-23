from django.contrib import admin

# Register your models here.
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')  # Colonnes affichées
    list_filter = ('created_at',)  # Filtrer par date
    search_fields = ('name', 'email', 'phone', 'company')  # Barre de recherche
    readonly_fields = ('created_at',)  # Champs en lecture seule
    fieldsets = (  # Organiser les champs
        ("Informations personnelles", {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ("Détails du message", {
            'fields': ('message', 'cv_file', 'created_at')
        }),
    )

admin.site.register(Contact, ContactAdmin)
