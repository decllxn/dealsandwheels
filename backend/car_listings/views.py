from rest_framework import generics
from .models import Car, CarImage
from .serializers import CarSerializer, CarImageSerializer
from rest_framework.response import Response
from rest_framework import status

class CarListCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CarDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CarImageListCreateView(generics.ListCreateAPIView):
    queryset = CarImage.objects.all()
    serializer_class = CarImageSerializer

class CarImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarImage.objects.all()
    serializer_class = CarImageSerializer