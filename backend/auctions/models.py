from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class CarAuction(models.Model):
    TRANSMISSION_CHOICES = [
        ("Automatic", "Automatic"),
        ("Manual", "Manual"),
        ("CVT", "CVT"),
        ("Dual-clutch", "Dual-Clutch"),
        ("Semi-Automatic", "Semi-Automatic"),
        ("Other", "Other"),
    ]

    DRIVETRAIN_CHOICES = [
        ("FWD", "Front-Wheel Drive"),
        ("RWD", "Rear-Wheel Drive"),
        ("AWD", "All-Wheel Drive"),
        ("4WD", "Four-Wheel Drive"),
    ]

    FUEL_TYPE_CHOICES = [
        ("Petrol", "Petrol"),
        ("Diesel", "Diesel"),
        ("Hybrid", "Hybrid"),
        ("Electric", "Electric"),
    ]

    BODY_STYLE_CHOICES = [
        ("Sedan", "Sedan"),
        ("SUV", "SUV"),
        ("Hatchback", "Hatchback"),
        ("Truck", "Truck"),
        ("Coupe", "Coupe"),
        ("Convertible", "Convertible"),
        ("Wagon", "Wagon"),
        ("Other", "Other"),
    ]

    title = models.CharField(max_length=255)
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    mileage = models.PositiveIntegerField()  # in kilometers
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES)
    drivetrain = models.CharField(max_length=20, choices=DRIVETRAIN_CHOICES)
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPE_CHOICES)
    body_style = models.CharField(max_length=20, choices=BODY_STYLE_CHOICES)
    title_status = models.CharField(max_length=50, blank=True, null=True)
    seller_type = models.CharField(max_length=20, choices=[("Dealer", "Dealer"), ("Private Seller", "Private-Seller"), ("Auction House", "Auction House")])
    location = models.CharField(max_length=255)
    description = models.TextField()
    auction_deadline = models.DateTimeField()
    featured = models.BooleanField(default=False)
    num_bids = models.PositiveIntegerField(default=0)
    num_bidders = models.PositiveIntegerField(default=0)
    seller = models.ForeignKey(User, on_delete=models.CASCADE, related_name="auctions")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.year} {self.make} {self.model} - {self.title}"


class AuctionImage(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="auction_images/")

    def __str__(self):
        return f"Image for {self.auction}"


class Review(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="reviews")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review {self.rating} by {self.user}"


class Equipment(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="equipment")
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Modification(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="modifications")
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class KnownFlaw(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="known_flaws")
    description = models.TextField()

    def __str__(self):
        return f"Flaw for {self.auction}"


class VideoWalkaround(models.Model):
    auction = models.ForeignKey(CarAuction, on_delete=models.CASCADE, related_name="videos")
    video_url = models.URLField()

    def __str__(self):
        return f"Video for {self.auction}"