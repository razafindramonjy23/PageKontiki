from rest_framework import serializers
from .models import EntretienDev

class EntretienDevSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntretienDev
        fields = '__all__'