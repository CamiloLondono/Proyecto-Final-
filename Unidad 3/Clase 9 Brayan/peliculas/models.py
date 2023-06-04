from django.db import models

# Create your models here.
class Peliculas(models.Model):
    titulo = models.CharField(max_length=255)
    genero = models.CharField(max_length=255)
    actores = models.CharField(max_length=255)