from rest_framework import viewsets, filters
from .models import CarAuction
from .serializers import CarAuctionSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CarAuctionViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = CarAuction.objects.all().order_by("-created_at")
    serializer_class = CarAuctionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title", "make", "model", "description", "location"]
    filterset_fields = [
        "transmission", "drivetrain", "fuel_type", "body_style", 
        "title_status", "seller_type", "year", "price", "featured"
    ]
    ordering_fields = ["price", "year", "num_bids", "auction_deadline"]
    
    def get_queryset(self):
        return CarAuction.objects.all()