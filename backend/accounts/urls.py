from django.urls import path
from .views import RegisterUserView, UserProfileView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/api/", RegisterUserView.as_view(), name="register"),
    path("profile/api/", UserProfileView.as_view(), name="profile"),
    path("token/api/", TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path("token/refresh/api", TokenRefreshView.as_view(), name='token_refresh'),
]