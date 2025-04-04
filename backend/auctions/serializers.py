from rest_framework import serializers
from .models import (
    CarAuction, AuctionImage, Review, Equipment, Modification, KnownFlaw, VideoWalkaround
)


class AuctionImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuctionImage
        fields = ["id", "image"]


class ReviewSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)  # Make user read-only

    class Meta:
        model = Review
        fields = ["id", "user", "rating", "comment", "created_at"]
        read_only_fields = ["created_at"]  # Ensure created_at is read-only


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
    equipment = EquipmentSerializer(many=True)  # Allow adding/removing existing equipment
    modifications = ModificationSerializer(many=True)  # Allow adding/removing existing modifications
    known_flaws = KnownFlawSerializer(many=True)  # Allow adding/removing existing known flaws
    videos = VideoWalkaroundSerializer(many=True)  # Allow adding/removing existing videos
    seller = serializers.StringRelatedField(read_only=True) # Make seller read-only

    class Meta:
        model = CarAuction
        fields = "__all__"
        read_only_fields = ["id", "created_at", "updated_at", "num_bids", "current_bid"]