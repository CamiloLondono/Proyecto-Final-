from django.db import models

# Create your models here.
class Ropa(models.Model):
    diseño = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    talla = models.CharField(max_length=255)