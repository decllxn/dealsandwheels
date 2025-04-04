from rest_framework import serializers
from .models import (
    CarAuction, AuctionImage, Review, Equipment, Modification, KnownFlaw, VideoWalkaround
)


class AuctionImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuctionImage
        fields = ["id", "image"]


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()

    class Meta:
        model = Review
        fields = ["id", "user", "rating", "comment", "created_at"]


class EquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Equipment
        fields = ["id", "name"]


class ModificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modification
        fields = ["id", "name"]


class KnownFlawSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnownFlaw
        fields = ["id", "description"]


class VideoWalkaroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoWalkaround
        fields = ["id", "video_url"]


class CarAuctionSerializer(serializers.ModelSerializer):
    images = AuctionImageSerializer(many=True, read_only=True)
    reviews = ReviewSerializer(many=True, read_only=True)
    equipment = EquipmentSerializer(many=True, read_only=True)
    modifications = ModificationSerializer(many=True, read_only=True)
    known_flaws = KnownFlawSerializer(many=True, read_only=True)
    videos = VideoWalkaroundSerializer(many=True, read_only=True)

    class Meta:
        model = CarAuction
        fields = "__all__"