from django.urls import re_path, path
from .views import index

app_name = 'frontend'
urlpatterns = [
    path('', index, name='home'),
    path('about', index, name='about'),
    path('details', index, name='details'),
    path('contacts', index, name='contacts')
]
