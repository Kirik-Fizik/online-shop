from rest_framework import serializers
from .models import Mark, Car, Images, ClassOfCars


class MarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mark
        fields = ('id', 'title', 'logo',)

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ('id', 'title', 'engine_volume', 'horse_power', 'type_of_engine', 'year_of_release', 'new', 'tarif1_1', 'tarif2_3', 'tarif4_6', 'tarif7_14', 'tarif15_21', 'tarif_more',)

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('id', 'brand', 'title', 'car', 'main', 'image', 'new', 'class_of_cars',)

class ClassOfCarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClassOfCars
        fields = ('id', 'title',)