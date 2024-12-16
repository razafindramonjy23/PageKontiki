from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Formulaire
from .serializers import FormulaireSerializers

class FormulaireListCreate(APIView): 
    def get(self, request):  
        formulaires = Formulaire.objects.all()
        serializer = FormulaireSerializers(formulaires, many=True)
        return Response(serializer.data)

    def post(self, request):  
        serializer = FormulaireSerializers(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class FormulaireDetail(APIView): 
    def get_object(self, pk): 
        try: 
            return Formulaire.objects.get(pk=pk)
        except Formulaire.DoesNotExist: 
            return None
    
    def GET(self, request, pk): 
        formulaire = self.get_object(pk)
        if formulaire is None: 
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = FormulaireSerializers(formulaire)
        return Response(serializer.data)
    
    def PUT(self, request, pk):
        formulaire = self.get_object(pk)
        if formulaire is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = FormulaireSerializers(formulaire, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, pk):
        formulaire = self.get_object(pk)
        if formulaire is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        formulaire.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)