from django.db import models


class Application(models.Model):
    area_choices = {
        ('art', 'творческое'),
        ('sport', 'спортивное'),
        ('music', 'музыкальное')
    }
    age_choices = {
        ('small', 'младшая'),
        ('medium', 'средняя'),
        ('large', 'старшая'),
    }

    name = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=15, blank=False)
    email = models.EmailField(max_length=50, blank=True)
    group_area = models.CharField(max_length=15, blank=False, choices=area_choices)
    group_age = models.CharField(max_length=15, blank=False, choices=age_choices)
    date = models.DateField(auto_now_add=True)


class Question(models.Model):
    name = models.CharField(max_length=50, blank=False)
    question = models.TextField(max_length=300, blank=False, default='')
    phone_number = models.CharField(max_length=15, blank=False)
    email = models.EmailField(max_length=50, blank=True)
    date = models.DateField(auto_now_add=True)


class Comment(models.Model):
    name = models.CharField(max_length=50, blank=False)
    comment = models.TextField(max_length=300, blank=False)
    phone_number = models.CharField(max_length=15, blank=True)
    email = models.EmailField(max_length=50, blank=True)
    date = models.DateField(auto_now_add=True)


class PhoneRequest(models.Model):
    name = models.CharField(max_length=50, blank=False)
    phone_number = models.CharField(max_length=15, blank=False)
    date = models.DateField(auto_now_add=True)
