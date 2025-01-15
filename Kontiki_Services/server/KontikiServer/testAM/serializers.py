from rest_framework import serializers
from .models import EntretienAM

class EntretienAMSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = EntretienAM
        fields = '__all__'
