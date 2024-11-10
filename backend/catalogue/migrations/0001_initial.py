# Generated by Django 5.1.2 on 2024-11-06 14:55

import django.db.models.deletion
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
                ('title', models.CharField(max_length=250)),
                ('engine_volume', models.CharField(max_length=250)),
                ('horse_power', models.CharField(max_length=250)),
                ('type_of_engine', models.CharField(max_length=250)),
                ('year_of_release', models.IntegerField()),
                ('new', models.BooleanField(default=False)),
                ('tarif1_1', models.IntegerField()),
                ('tarif2_3', models.IntegerField()),
                ('tarif4_6', models.IntegerField()),
                ('tarif7_14', models.IntegerField()),
                ('tarif15_21', models.IntegerField()),
                ('tarif_more', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='ClassOfCars',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Mark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('logo', models.ImageField(upload_to='logos/')),
            ],
        ),
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('main', models.BooleanField(default=False)),
                ('image', models.ImageField(upload_to='photos/')),
                ('new', models.BooleanField()),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalogue.car')),
                ('class_of_cars', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalogue.classofcars')),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='catalogue.mark')),
            ],
        ),
    ]
