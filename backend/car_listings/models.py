from django.db import models

class Car(models.Model):
    # Transmission Types
    TRANSMISSION_CHOICES = [
        ('Automatic', 'Automatic'),
        ('Manual', 'Manual'),
        ('CVT', 'CVT'),
        ('Dual-Clutch', 'Dual-Clutch'),
        ('Semi-Automatic', 'Semi-Automatic'),
    ]

    # Drivetrain Types
    DRIVETRAIN_CHOICES = [
        ('FWD', 'Front-Wheel Drive'),
        ('RWD', 'Rear-Wheel Drive'),
        ('AWD', 'All-Wheel Drive'),
        ('4WD', 'Four-Wheel Drive'),
    ]

    # Fuel Types
    FUEL_CHOICES = [
        ('Gasoline', 'Gasoline'),
        ('Diesel', 'Diesel'),
        ('Hybrid', 'Hybrid'),
        ('Electric', 'Electric'),
        ('Hydrogen', 'Hydrogen Fuel Cell'),
        ('Ethanol', 'Ethanol'),
        ('CNG', 'Compressed Natural Gas'),
    ]

    # Body Styles
    BODY_STYLE_CHOICES = [
        ('Sedan', 'Sedan'),
        ('Coupe', 'Coupe'),
        ('Hatchback', 'Hatchback'),
        ('Convertible', 'Convertible'),
        ('SUV', 'SUV'),
        ('Crossover', 'Crossover'),
        ('Pickup Truck', 'Pickup Truck'),
        ('Van', 'Van'),
        ('Wagon', 'Wagon'),
        ('Motorcycle', 'Motorcycle'),
        ('ATV', 'All-Terrain Vehicle'),
        ('RV', 'Recreational Vehicle'),
        ('Heavy Truck', 'Heavy Truck'),
        ('Bus', 'Bus'),
        ('Tractor', 'Tractor'),
    ]

    # Title Status
    TITLE_STATUS_CHOICES = [
        ('Clean', 'Clean'),
        ('Salvage', 'Salvage'),
        ('Rebuilt', 'Rebuilt'),
        ('Parts Only', 'Parts Only'),
    ]

    # Seller Type
    SELLER_TYPE_CHOICES = [
        ('Dealer', 'Dealer'),
        ('Private Seller', 'Private Seller'),
        ('Auction House', 'Auction House'),
    ]

    # Make & Model
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    trim = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    # Vehicle Details
    year = models.PositiveIntegerField()
    mileage = models.PositiveIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    engine = models.CharField(max_length=100, blank=True, null=True)
    fuel_type = models.CharField(max_length=50, choices=FUEL_CHOICES)
    drivetrain = models.CharField(max_length=10, choices=DRIVETRAIN_CHOICES)
    transmission = models.CharField(max_length=20, choices=TRANSMISSION_CHOICES)
    body_style = models.CharField(max_length=50, choices=BODY_STYLE_CHOICES)

    # Vehicle Condition
    exterior_color = models.CharField(max_length=50)
    interior_color = models.CharField(max_length=50)
    title_status = models.CharField(max_length=50, choices=TITLE_STATUS_CHOICES)
    condition = models.TextField(blank=True, null=True)

    # Performance & Specs
    horsepower = models.PositiveIntegerField(blank=True, null=True)
    torque = models.PositiveIntegerField(blank=True, null=True)
    top_speed = models.PositiveIntegerField(blank=True, null=True)
    acceleration = models.FloatField(blank=True, null=True)
    fuel_economy_city = models.FloatField(blank=True, null=True)
    fuel_economy_highway = models.FloatField(blank=True, null=True)

    # Pricing & Listings
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    is_sold = models.BooleanField(default=False)

    # Seller Information
    seller = models.CharField(max_length=255)
    seller_type = models.CharField(max_length=50, choices=SELLER_TYPE_CHOICES)
    location = models.CharField(max_length=255)

    # Images & Media
    main_image = models.ImageField(upload_to='media/cars/')
    video_url = models.URLField(blank=True, null=True)

    # Additional Features
    has_sunroof = models.BooleanField(default=False)
    has_navigation = models.BooleanField(default=False)
    has_leather_seats = models.BooleanField(default=False)
    has_backup_camera = models.BooleanField(default=False)
    has_bluetooth = models.BooleanField(default=False)
    has_heated_seats = models.BooleanField(default=False)
    has_parking_sensors = models.BooleanField(default=False)
    has_adaptive_cruise_control = models.BooleanField(default=False)
    has_autopilot = models.BooleanField(default=False)

    # Date Tracking
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.year} {self.make} {self.model} ({self.vin})"

class CarImage(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name="additional_images")
    image = models.ImageField(upload_to="media/cars/")

    def __str__(self):
        return f"Image for {self.car}"
