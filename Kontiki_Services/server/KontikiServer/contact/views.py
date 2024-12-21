from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from .serializers import ContactSerializer


@api_view(['POST'])
def submit_contact(request):
    try:
        print("Données reçues:", request.data)
        print("Fichiers reçus:", request.FILES)
        
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Contact form submitted successfully',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        else:
            print("Erreurs de validation:", serializer.errors)
            return Response({
                'message': 'Validation failed',
                'errors': serializer.errors
            }, status=status.HTTP_400_BAD_REQUEST)
            
    except Exception as e:
        print("Exception:", str(e))
        return Response({
            'message': 'An error occurred',
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)