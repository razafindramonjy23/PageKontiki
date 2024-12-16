from rest_framework import serializers
from .models import Formulaire

class FormulaireSerializers(serializers.ModelSerializer): 
    class Meta: 
        model = Formulaire
        fields = '__all__'
        