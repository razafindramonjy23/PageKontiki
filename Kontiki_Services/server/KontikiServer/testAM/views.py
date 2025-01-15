from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EntretienAM
from .serializers import EntretienAMSerializer

class EntretienAMListCreate(APIView):
    def get(self, request):
        """List all entretiens"""
        entretiens = EntretienAM.objects.all()
        serializer = EntretienAMSerializer(entretiens, many=True)
        return Response(serializer.data)

    def post(self, request):
        """Create a new entretien"""
        serializer = EntretienAMSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EntretienAMDetail(APIView):
    def get_object(self, pk):
        """Helper method to get the object with given pk"""
        try:
            return EntretienAM.objects.get(pk=pk)
        except EntretienAM.DoesNotExist:
            raise status.HTTP_404_NOT_FOUND

    def get(self, request, pk):
        """Retrieve an entretien"""
        try:
            entretien = self.get_object(pk)
            serializer = EntretienAMSerializer(entretien)
            return Response(serializer.data)
        except Exception as e:
            return Response(
                {"error": str(e)}, 
                status=status.HTTP_404_NOT_FOUND
            )

    def put(self, request, pk):
        """Update an entretien"""
        try:
            entretien = self.get_object(pk)
            serializer = EntretienAMSerializer(entretien, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_404_NOT_FOUND
            )

    def delete(self, request, pk):
        """Delete an entretien"""
        try:
            entretien = self.get_object(pk)
            entretien.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_404_NOT_FOUND
            )