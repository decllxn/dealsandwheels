from rest_framework import viewsets, filters
from .models import CarAuction
from .serializers import CarAuctionSerializer
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q

class CarAuctionPagination(PageNumberPagination):
    page_size = 16
    page_size_query_param = 'page_size'  # Allows client to override page size
    max_page_size = 100

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
    pagination_class = CarAuctionPagination

    def get_queryset(self):
        queryset = CarAuction.objects.all().order_by("-created_at")
        search_term = self.request.query_params.get('search', None)
        if search_term:
            search_fields_to_check = ["title", "make", "model", "description", "location"]
            q_objects = Q()
            for field_name in search_fields_to_check:
                q_objects |= Q(**{f"{field_name}__icontains": search_term})
            queryset = queryset.filter(q_objects)
        return queryset