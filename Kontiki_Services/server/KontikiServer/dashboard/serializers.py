from rest_framework import serializers
from .models import Interview, Candidate

class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidate
        fields = '__all__'

class InterviewSerializer(serializers.ModelSerializer):
    candidate = CandidateSerializer()
    
    class Meta:
        model = Interview
        fields = '__all__'