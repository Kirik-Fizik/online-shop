from django.contrib import admin
from .models import Mark, Car, Images, ClassOfCars

# Register your models here.
admin.site.register(Mark)
admin.site.register(Car)
admin.site.register(Images)
admin.site.register(ClassOfCars)