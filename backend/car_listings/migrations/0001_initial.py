# Generated by Django 5.1.7 on 2025-03-28 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('make', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
                ('trim', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('year', models.PositiveIntegerField()),
                ('mileage', models.PositiveIntegerField()),
                ('vin', models.CharField(max_length=17, unique=True)),
                ('engine', models.CharField(blank=True, max_length=100, null=True)),
                ('fuel_type', models.CharField(choices=[('Gasoline', 'Gasoline'), ('Diesel', 'Diesel'), ('Hybrid', 'Hybrid'), ('Electric', 'Electric'), ('Hydrogen', 'Hydrogen Fuel Cell'), ('Ethanol', 'Ethanol'), ('CNG', 'Compressed Natural Gas')], max_length=50)),
                ('drivetrain', models.CharField(choices=[('FWD', 'Front-Wheel Drive'), ('RWD', 'Rear-Wheel Drive'), ('AWD', 'All-Wheel Drive'), ('4WD', 'Four-Wheel Drive')], max_length=10)),
                ('transmission', models.CharField(choices=[('Automatic', 'Automatic'), ('Manual', 'Manual'), ('CVT', 'CVT'), ('Dual-Clutch', 'Dual-Clutch'), ('Semi-Automatic', 'Semi-Automatic')], max_length=20)),
                ('body_style', models.CharField(choices=[('Sedan', 'Sedan'), ('Coupe', 'Coupe'), ('Hatchback', 'Hatchback'), ('Convertible', 'Convertible'), ('SUV', 'SUV'), ('Crossover', 'Crossover'), ('Pickup Truck', 'Pickup Truck'), ('Van', 'Van'), ('Wagon', 'Wagon'), ('Motorcycle', 'Motorcycle'), ('ATV', 'All-Terrain Vehicle'), ('RV', 'Recreational Vehicle'), ('Heavy Truck', 'Heavy Truck'), ('Bus', 'Bus'), ('Tractor', 'Tractor')], max_length=50)),
                ('exterior_color', models.CharField(max_length=50)),
                ('interior_color', models.CharField(max_length=50)),
                ('title_status', models.CharField(choices=[('Clean', 'Clean'), ('Salvage', 'Salvage'), ('Rebuilt', 'Rebuilt'), ('Parts Only', 'Parts Only')], max_length=50)),
                ('condition', models.TextField(blank=True, null=True)),
                ('horsepower', models.PositiveIntegerField(blank=True, null=True)),
                ('torque', models.PositiveIntegerField(blank=True, null=True)),
                ('top_speed', models.PositiveIntegerField(blank=True, null=True)),
                ('acceleration', models.FloatField(blank=True, null=True)),
                ('fuel_economy_city', models.FloatField(blank=True, null=True)),
                ('fuel_economy_highway', models.FloatField(blank=True, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('discount_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('is_featured', models.BooleanField(default=False)),
                ('is_sold', models.BooleanField(default=False)),
                ('seller', models.CharField(max_length=255)),
                ('seller_type', models.CharField(choices=[('Dealer', 'Dealer'), ('Private Seller', 'Private Seller'), ('Auction House', 'Auction House')], max_length=50)),
                ('location', models.CharField(max_length=255)),
                ('main_image', models.ImageField(upload_to='cars/')),
                ('additional_images', models.JSONField(blank=True, null=True)),
                ('video_url', models.URLField(blank=True, null=True)),
                ('has_sunroof', models.BooleanField(default=False)),
                ('has_navigation', models.BooleanField(default=False)),
                ('has_leather_seats', models.BooleanField(default=False)),
                ('has_backup_camera', models.BooleanField(default=False)),
                ('has_bluetooth', models.BooleanField(default=False)),
                ('has_heated_seats', models.BooleanField(default=False)),
                ('has_parking_sensors', models.BooleanField(default=False)),
                ('has_adaptive_cruise_control', models.BooleanField(default=False)),
                ('has_autopilot', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
