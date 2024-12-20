from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q
from .models import Interview, Candidate
from .serializers import InterviewSerializer, CandidateSerializer

class InterviewViewSet(viewsets.ModelViewSet):
    serializer_class = InterviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Interview.objects.all()
        status = self.request.query_params.get('status', None)
        search = self.request.query_params.get('search', None)

        if status and status != 'all':
            queryset = queryset.filter(status=status)
            
        if search:
            queryset = queryset.filter(
                Q(candidate__name__icontains=search) |
                Q(candidate__email__icontains=search)
            )

        return queryset

    @action(detail=True, methods=['post'])
    def cancel(self, request, pk=None):
        interview = self.get_object()
        interview.status = 'cancelled'
        interview.save()
        return Response({'status': 'interview cancelled'})

    @action(detail=True, methods=['post'])
    def complete(self, request, pk=None):
        interview = self.get_object()
        interview.status = 'completed'
        interview.feedback = request.data.get('feedback', '')
        interview.save()
        return Response({'status': 'interview completed'})