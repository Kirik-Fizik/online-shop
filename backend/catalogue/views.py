from rest_framework import generics
from .models import Mark, Car, Images, ClassOfCars
from .serializers import MarkSerializer, CarSerializer, ImagesSerializer, ClassOfCarsSerializer


class ListMark(generics.ListAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkSerializer

class DetailMark(generics.RetrieveAPIView):
    queryset = Mark.objects.all()
    serializer_class = MarkSerializer


class ListCar(generics.ListAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class DetailCar(generics.RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer


class ListImages(generics.ListAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer

class DetailImages(generics.RetrieveAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer

class ListClassOfCars(generics.ListAPIView):
    queryset = ClassOfCars.objects.all()
    serializer_class = ClassOfCarsSerializer

class ListCurrentClassOfCars(generics.ListAPIView):
    serializer_class = ImagesSerializer

    def get_queryset(self):
        class_id = self.kwargs['id']
        if class_id:
            return Images.objects.filter(class_of_cars=class_id)
        else:
            return Images.objects.all()

class ListCurrentImages(generics.ListAPIView):
    serializer_class = ImagesSerializer

    def get_queryset(self):
        car_id = self.kwargs['id']
        if car_id:
            return Images.objects.filter(car=car_id) 
        else:
            return Images.objects.all()

class ListCurrentCars(generics.ListAPIView):
    serializer_class = ImagesSerializer

    def get_queryset(self):
        brand_id = self.kwargs['id']
        if brand_id:
            return Images.objects.filter(brand=brand_id) 
        else:
            return Images.objects.all(brand=brand_id)
        
class ListNewCars(generics.ListAPIView):
    serializer_class = ImagesSerializer

    def get_queryset(self):
        is_new = self.kwargs['new']
        if is_new == "new":
            return Images.objects.filter(new=True)
        else:
            return Images.objects.all()