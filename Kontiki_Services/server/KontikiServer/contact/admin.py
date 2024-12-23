from django.contrib import admin

# Register your models here.
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'created_at')  
    list_filter = ('created_at',)  
    search_fields = ('name', 'email', 'phone', 'company')  
    readonly_fields = ('created_at',)  
    fieldsets = (  
        ("Informations personnelles", {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ("Détails du message", {
            'fields': ('message', 'cv_file', 'created_at')
        }),
    )

admin.site.register(Contact, ContactAdmin)
