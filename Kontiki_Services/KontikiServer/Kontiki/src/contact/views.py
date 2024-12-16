from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

@api_view(['GET'])
def get_contacts(request): 
    contacts = Contact.objects.all()
    serializerData = ContactSerializer(contacts, many = True).data
    return Response(serializerData)

@api_view(['POST'])
def create_contacts(request): 
    data = request.data
    serializer= ContactSerializer (data = data)
    if serializer.is_valid(): 
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST )

@api_view(['PUT', 'DELETE'])
def contact_detail(request, pk): 
    try: 
        contact = Contact.objects.get(pk=pk)
    except Contact.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE': 
        contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT': 
        data = request.data 
        serializer = ContactSerializer(contact, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)