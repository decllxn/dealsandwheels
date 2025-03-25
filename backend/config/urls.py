from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # accounts
    path('accounts/', include('accounts.urls')),

    # auth
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/social/', include('allauth.urls')),
]
