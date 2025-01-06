from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EntretienDev
from .serializers import EntretienDevSerializer

class EntretienDevListCreate(APIView): 
    def get(self, request):  
        entretiens = EntretienDev.objects.all()
        serializer = EntretienDevSerializer(entretiens, many=True)
        return Response(serializer.data)

    def post(self, request):  
        serializer = EntretienDevSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class EntretienDevDetail(APIView): 
    def get_object(self, pk): 
        try: 
            return EntretienDev.objects.get(pk=pk)
        except EntretienDev.DoesNotExist: 
            return None
    
    def get(self, request, pk): 
        entretien = self.get_object(pk)
        if entretien is None: 
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EntretienDevSerializer(entretien)
        return Response(serializer.data)
    
    def put(self, request, pk):
        entretien = self.get_object(pk)
        if entretien is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = EntretienDevSerializer(entretien, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        entretien = self.get_object(pk)
        if entretien is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        entretien.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)