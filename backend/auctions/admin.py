from django.contrib import admin
from .models import (
    CarAuction, AuctionImage, Review, Equipment, Modification, KnownFlaw, VideoWalkaround
)


class AuctionImageInline(admin.TabularInline):
    model = AuctionImage
    extra = 1  # Allows adding multiple images


class ReviewInline(admin.TabularInline):
    model = Review
    extra = 1


class EquipmentInline(admin.TabularInline):
    model = Equipment
    extra = 1


class ModificationInline(admin.TabularInline):
    model = Modification
    extra = 1


class KnownFlawInline(admin.TabularInline):
    model = KnownFlaw
    extra = 1


class VideoWalkaroundInline(admin.TabularInline):
    model = VideoWalkaround
    extra = 1


@admin.register(CarAuction)
class CarAuctionAdmin(admin.ModelAdmin):
    list_display = ("title", "make", "model", "year", "price", "seller", "auction_deadline", "featured", "num_bids")
    list_filter = ("featured", "seller_type", "transmission", "fuel_type", "drivetrain", "body_style", "year")
    search_fields = ("title", "make", "model", "description", "location")
    ordering = ("-created_at",)
    inlines = [AuctionImageInline, ReviewInline, EquipmentInline, ModificationInline, KnownFlawInline, VideoWalkaroundInline]


@admin.register(AuctionImage)
class AuctionImageAdmin(admin.ModelAdmin):
    list_display = ("auction", "image")


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ("auction", "user", "rating", "comment", "created_at")
    list_filter = ("rating", "created_at")
    search_fields = ("user__username", "comment")


@admin.register(Equipment)
class EquipmentAdmin(admin.ModelAdmin):
    list_display = ("auction", "name")


@admin.register(Modification)
class ModificationAdmin(admin.ModelAdmin):
    list_display = ("auction", "name")


@admin.register(KnownFlaw)
class KnownFlawAdmin(admin.ModelAdmin):
    list_display = ("auction", "description")


@admin.register(VideoWalkaround)
class VideoWalkaroundAdmin(admin.ModelAdmin):
    list_display = ("auction", "video_url")