from django.contrib import admin
from .models import Car, CarImage

class CarImageInline(admin.TabularInline):
    model = CarImage
    extra = 1

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ('year', 'make', 'model', 'price', 'is_sold', 'created_at')
    search_fields = ('make', 'model', 'vin')
    list_filter = ('is_featured', 'is_sold', 'fuel_type', 'body_style', 'seller_type')
    inlines = [CarImageInline]

@admin.register(CarImage)
class CarImageAdmin(admin.ModelAdmin):
    list_display = ('car', 'image')