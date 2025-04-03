from django.urls import path
from .views import CarListCreateView, CarDetailView, CarImageListCreateView, CarImageDetailView

urlpatterns = [
    path('api/', CarListCreateView.as_view(), name='car-list-create'),
    path('api/<int:pk>/', CarDetailView.as_view(), name='car-detail'),
    path('api-images/', CarImageListCreateView.as_view(), name='car-image-list-create'),
    path('api-images/<int:pk>/', CarImageDetailView.as_view(), name='car-image-detail'),
]
