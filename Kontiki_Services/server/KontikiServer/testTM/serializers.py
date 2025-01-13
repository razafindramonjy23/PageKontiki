from rest_framework import serializers
from .models import EntretienTM

class EntretienTMSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = EntretienTM
        fields = '__all__'
