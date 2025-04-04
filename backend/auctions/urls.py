from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarAuctionViewSet

router = DefaultRouter()
router.register(r"auctions", CarAuctionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]