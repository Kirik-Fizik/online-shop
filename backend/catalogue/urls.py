from django.urls import path
from .views import ListMark, DetailMark, ListCar, DetailCar, ListImages, DetailImages, ListCurrentImages, ListCurrentCars, ListNewCars, ListClassOfCars, ListCurrentClassOfCars
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path


urlpatterns = [
    path('marks/<int:pk>/', DetailMark.as_view()),
    path('marks/', ListMark.as_view()),
    path('cars/<int:pk>/', DetailCar.as_view()),
    path('cars/', ListCar.as_view()),
    path('images/<int:pk>', DetailImages.as_view()),
    path('images/', ListImages.as_view()),
    path('images/<str:new>/', ListNewCars.as_view()),
    path('images/car/<int:id>/', ListCurrentImages.as_view()),
    path('car/brand/<int:id>/', ListCurrentCars.as_view()),
    path('classofcars/<int:id>/', ListCurrentClassOfCars.as_view()),
    path('classofcars/', ListClassOfCars.as_view()),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)