from django.db import models

# Create your models here.

class Mark(models.Model):
    title = models.CharField(max_length=250)
    logo = models.ImageField(upload_to='logos/')

    def __str__(self):
        return self.title
    
    
class Car(models.Model):
    title = models.CharField(max_length=250)
    engine_volume = models.CharField(max_length=250)
    horse_power = models.CharField(max_length=250)
    type_of_engine = models.CharField(max_length=250)
    year_of_release = models.IntegerField()
    new = models.BooleanField(default=False)
    tarif1_1 = models.IntegerField()
    tarif2_3 = models.IntegerField()
    tarif4_6 = models.IntegerField()
    tarif7_14 = models.IntegerField()
    tarif15_21 = models.IntegerField()
    tarif_more = models.IntegerField()

    def __str__(self):
        return self.title
    

class ClassOfCars(models.Model):
    title = models.CharField(max_length=250)

    def __str__(self):
        return self.title
    
    
class Images(models.Model):
    title = models.CharField(max_length=250)
    brand = models.ForeignKey(Mark, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    main = models.BooleanField(default=False)
    image = models.ImageField(upload_to='photos/')
    new = models.BooleanField()
    class_of_cars = models.ForeignKey(ClassOfCars, on_delete=models.CASCADE)

    def __str__(self):
        return self.title