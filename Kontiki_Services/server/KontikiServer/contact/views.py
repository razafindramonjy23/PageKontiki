from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from .serializers import ContactSerializer

@api_view(['POST'])
def submit_contact(request):
    try:
        # Récupérer le fichier CV
        cv_file = request.FILES.get('cv_file')
        
        # Créer un dictionnaire avec les données du formulaire
        contact_data = {
            'name': request.data.get('name'),
            'email': request.data.get('email'),
            'phone': request.data.get('phone'),
            'company': request.data.get('company'),
            'message': request.data.get('message'),
        }
        
        # Si un fichier CV est présent, l'ajouter aux données
        if cv_file:
            contact_data['cv_file'] = cv_file

        # Sérialiser et valider les données
        serializer = ContactSerializer(data=contact_data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Contact form submitted successfully'
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    except Exception as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)