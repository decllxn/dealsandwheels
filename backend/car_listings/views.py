from rest_framework import generics, filters
from .models import Car, CarImage
from .serializers import CarSerializer, CarImageSerializer
from rest_framework.response import Response
from rest_framework import status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.pagination import PageNumberPagination

class CarPagination(PageNumberPagination):
    page_size = 10  # You can adjust the default page size
    page_size_query_param = 'page_size'
    max_page_size = 100

class CarListCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['make', 'model', 'year', 'transmission', 'fuel_type', 'body_style', 'price']  # Add fields you want to filter by
    search_fields = ['make', 'model', 'description']  # Add fields you want to search in
    ordering_fields = ['price', 'year', 'created_at']  # Add fields you want to order by
    pagination_class = CarPagination

class CarDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class CarImageListCreateView(generics.ListCreateAPIView):
    queryset = CarImage.objects.all()
    serializer_class = CarImageSerializer

class CarImageDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CarImage.objects.all()
    serializer_class = CarImageSerializer