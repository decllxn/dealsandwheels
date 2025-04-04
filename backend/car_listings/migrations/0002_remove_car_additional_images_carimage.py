# Generated by Django 5.1.7 on 2025-03-28 07:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car_listings', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='additional_images',
        ),
        migrations.CreateModel(
            name='CarImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='cars/additional_images/')),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='additional_images', to='car_listings.car')),
            ],
        ),
    ]
