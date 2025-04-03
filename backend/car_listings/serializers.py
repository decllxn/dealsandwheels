from rest_framework import serializers
from .models import Car, CarImage
from django.conf import settings

class CarImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        if obj.image:
            return f"{settings.MEDIA_URL}{obj.image}"
        return None

    class Meta:
        model = CarImage
        fields = ['id', 'image', 'car']


class CarSerializer(serializers.ModelSerializer):
    additional_images = CarImageSerializer(many=True, read_only=True)
    main_image = serializers.ImageField(required=True)

    class Meta:
        model = Car
        fields = '__all__'